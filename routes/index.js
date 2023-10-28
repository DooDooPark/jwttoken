var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('home');
});

router.get('/smoothies', (req, res) => {
  res.render('smoothies');
});

module.exports = router;
