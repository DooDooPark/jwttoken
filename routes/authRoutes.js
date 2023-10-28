var express = require('express');
const authController = require('../controller/authController')
var router = express.Router();

router.get('/signup', authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.post('login', authController.login_post);

module.exports = router;