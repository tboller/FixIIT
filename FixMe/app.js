var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var cors = require('cors');
var mongoose = require('mongoose');
var mongo = require('./config/mongo');

var index = require('./routes/index');
var users = require('./routes/users');

//MONGODB and Mongoose
mongoose.connect(mongo.database);
var db = mongoose.connection;
db.on('error', function(){
  console.log("DB error");
});
db.once('open', function() {
  console.log("Connected to Database..");
});

var app = express();

//Misc Middlware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Angular static files
app.use(express.static(path.join(__dirname, 'dist')));

// Cors
app.use(cors());

// Passport Middlware JWT configuration
app.use(passport.initialize());
app.use(passport.session());
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
opts.secretOrKey = mongo.secret;
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
  User.getUserById(jwt_payload.data._id, function(err, user){
    console.log(jwt_payload);
    if(err) {
      return done(err, false);
    }

    if(user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
}));

// Routes
app.use('/', index);
app.use('/users', users);

// 404 error cather
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
