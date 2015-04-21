var express = require('express'),
    router = express.Router();

router.get('/', function (req, res) {
  res.end('projects');
})

module.exports = router;
