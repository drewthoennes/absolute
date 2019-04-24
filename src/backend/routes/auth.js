const express = require('express');
const {User} = require('models');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

module.exports = function(router) {
  router.post('/api/auth/login', (req, res) => {
    if (!req.body.username || !req.body.password) {
      res.json({'error': 'Missing fields'});
      return;
    }

    User.findOne({'username': req.body.username}).exec((err, user) => {
      if (err) {
        res.json({'error': 'Error authenticating'});
        return;
      }
      else if (!user) {
        res.json({'error': 'Invalid username'});
        return;
      }

      user.verifyPassword(req.body.password, (err, result) => {
        if (err) {
          res.json({'error': 'Error authenticating'});
          return;
        }

        // Incorrect password
        if (!result) {
          res.json({'error': 'Invalid credentials'});
          return;
        }

        // Create JWT
        let token = jwt.sign({
          user_id: user._id,
          username: user.username
        }, process.env.JWT_SECRET, {
          expiresIn: '12h'
        });

        res.json({
          'message': 'Successfully authenticated',
          'token': token,
          'username': user.username
        });
      });
    });
  });

  router.post('/api/auth/register', (req, res) => {
    if (!req.body.email || !req.body.username || !req.body.password) {
      res.json({'error': 'Missing fields'});
      return;
    }

    let newUser = new User({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    });

    newUser.save((err, user) => {
      if (err || !user) {
        res.json({'error': 'Error adding user: ' + err});
        return;
      }

      res.json({
        'message': 'Successfully registered user'
      });
    });
  });
}
