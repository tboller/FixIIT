var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');
var config = require('../config/mongo');
var User = require('../models/user');

//Test Route to retrieve data from db
router.get('/test', function(req, res, next){
  User.find({}).exec(function (err, users) {
     if (err) {
       return next(err);
     }
     res.json(users);
   });
});
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
router.get('/profile', passport.authenticate('jwt', {session:false}), function(req, res, next) {
  res.json({msg: "hello"});
});

module.exports = router;
