var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongo = require('./config/mongo');

var index = require('./routes/index');
var users = require('./routes/users');

//MONGODB and Mongoose
mongoose.connect(mongo.mongoString);
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
app.use('/', express.static(path.join(__dirname, 'dist')));

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
