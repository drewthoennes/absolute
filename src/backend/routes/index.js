const express = require('express');

module.exports = function() {
  let router = express.Router();

  router.get('/api', (req, res) => {
    res.json({message: 'Absolute API'});
  });

  require('./error')(router);

  return router;
}
