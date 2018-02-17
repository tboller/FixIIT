var express = require('express');
var router = express.Router();

//Register Route
router.post('/register', function(req, res, next) {
  res.send('Register');
});

//Login Route
router.post('/login', function(req, res, next) {
  res.send('Login');
});

//Profile Route
router.get('/profile', function(req, res, next) {
  res.send('Profile');
});

module.exports = router;
