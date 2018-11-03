var express = require('express');
var router = express.Router();

const firebaseApiKey = process.env.FIREBASE_API_KEY;
router.get('/:id', function(req, res, next) {
  console.log(req.params.id);
  res.render(process.cwd() + '/public/dashboard.hbs', { firebaseImport: firebaseApiKey, ID: req.params.id });
});

module.exports = router;
