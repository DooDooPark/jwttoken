const express = require('express');
const { requireAuth } = require('../middleware/authMiddleware');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('home');
});

router.get('/smoothies', requireAuth, (req, res) => {
  res.render('smoothies');
});

router.get('/set-cookies', (req, res) => {
  // res.setHeader('Set-Cookie', 'newUser=true');
  res.cookie('newUser', false)
  // res.cookie('isEmployeed', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
  res.cookie('isEmployeed', true, { maxAge: 1000 * 60 * 60 * 24 });
  res.send('you got the cookies!');
})

router.get('/read-cookies', (req, res) => {

  const cookies = req.cookies;
  console.log(cookies);
  res.json(cookies);
})

module.exports = router;
