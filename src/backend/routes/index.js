const express = require('express');
const config = (require('../../../config')).default;

module.exports = function() {
  let router = express.Router();

  router.get('/api', (req, res) => {
    res.json({message: config.name + ' API'});
  });

  require('./auth')(router);
  require('./game')(router);
  require('./error')(router);

  return router;
}
