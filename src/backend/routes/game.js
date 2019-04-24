const express = require('express');
const {User} = require('models');
const {authorize} = require('utils');
const bodyParser = require('body-parser');

module.exports = function(router) {
  router.get('/api/game', (req, res) => {
    authorize(req).then(decoded => {
      User.findById(decoded.user_id).exec((err, user) => {
        if (err || !user) {
          res.json({'error': 'Invalid input'});
          return;
        }

        res.json({'game': user.game});
      });
    }).catch(err => {
      res.json({'error': err})
    });
  });

  router.post('/api/game', (req, res) => {
    if (!req.body.game) {
      res.json({'error': 'Missing fields'});
      return;
    }

    authorize(req).then(decoded => {
      User.findById(decoded.user_id).exec((err, user) => {
        if (err || !user) {
          res.json({'error': 'Invalid input'});
          return;
        }

        user.game = req.body.game;
        user.save(err => {
          if (err) {
            res.json({'error': 'There was an error saving the game data'});
            return;
          }

          res.json({'message': 'Successfully saved game data'});
        });
      });
    }).catch(err => {
      res.json({'error': err})
    });
  });
}
