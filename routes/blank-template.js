var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(process.cwd() + '/public/blank-template.hbs');
});

module.exports = router;