var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render(process.cwd() + '/public/standard-template.hbs');
});

module.exports = router;