var express = require('express');
var router = express.Router();
require('dotenv').config();

const firebaseApiKey = process.env.FIREBASE_API_KEY;

router.get('/', function(req, res, next) {
  res.render(process.cwd() + '/public/grapesjs.hbs', { firebaseImport: firebaseApiKey }); 
});

module.exports = router;
