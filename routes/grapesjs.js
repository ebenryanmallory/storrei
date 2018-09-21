var express = require('express');
var router = express.Router();
require('dotenv').config();

const firebaseData = process.env.TEST;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(process.cwd() + '/public/grapesjs.hbs', { script: '<script>console.log("' + firebaseData + '");</script>', message: 'Hello there!' });
});

module.exports = router;
