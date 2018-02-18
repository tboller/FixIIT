var express = require('express');
var router = express.Router();
const config = require('../config/mongo');
const User = require('../models/user');

//Register Route
router.post('/register', function(req, res, next) {

  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });

  User.addUser(newUser, (err, user) =>{
      if(err){
        res.json({success: false, msg: 'Failed to Register'})
      }else {
        res.json({success: true, msg: 'Registered'})
      }
  });
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
