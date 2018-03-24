var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');
var mongo = require('../config/mongo');

//test route

router.get('/', function(req, res, next){
	res.send("HI");
});


module.exports = router;
