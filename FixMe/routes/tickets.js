var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');
var mongo = require('../config/mongo');

//test route

router.get('/', function(req, res, next){
	//get All Tickets	
	res.send("All tickets");
});

router.post('/', function(req,res,next){
	//new ticket
});

router.get('/:id', function(req, res, next){
  //get One ticket 
  res.send("One ticket");
});

router.put('/:id', function(req, res, next){
  //edit (voting)
});


router.get
module.exports = router;
