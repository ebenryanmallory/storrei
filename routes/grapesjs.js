var express = require('express');
var router = express.Router();
require('dotenv').config();

const firebaseApiKey = process.env.FIREBASE_API_KEY;

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
router.get('/:id', function(req, res, next) {
  console.log(req.params.id);
  res.render(process.cwd() + '/public/grapesjs.hbs', { firebaseImport: firebaseApiKey, collectionName: 'jrYcuYxr7RNVbSdc5UsXW9GT6Vs1', ID: req.params.id }); 
});

module.exports = router;
