var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');
var mongo = require('../config/mongo');
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
  var username = req.body.username;
  var password = req.body.password;

  User.getUserByUsername(username, function(err, user){
    if(err) concole.log(err);
    if(!user){
      return res.json({msg: 'User not found'});
    }
    User.comparePassword(password, user.password, function(err, isMatch){
      if(err) console.log(err);
      if(isMatch){
        var token = jwt.sign({data: user}, mongo.secret,{expiresIn: 604800});
        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }

        });
      }else {
        return res.json({success: false, msg: 'Incorrect Password'});
      }
    });
  });
});


//Profile Route
router.get('/profile', passport.authenticate('jwt', {session:false}), function(req, res) {
  res.send('Logged in: true');
});

module.exports = router;
