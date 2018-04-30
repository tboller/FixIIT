var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');
var mongo = require('../config/mongo');
var Ticket = require('../models/ticket');

router.get('/', function(req, res, next){
	Ticket.find({}).exec(function (err, tickets) {
     if (err) {
       return next(err);
     }
     res.json(tickets);
   });
});

router.post('/', function(req,res,next){
	var newTicket = new Ticket({
    title: req.body.title,
    description: req.body.description,
    link: req.body.link,
  });
	console.log(newTicket);

  Ticket.addTicket(newTicket, (err, ticket) =>{
      if(err){
        res.json({success: false, msg: 'Failed to Create Ticket'})
				console.log(err);
      }else {
				res.json({success: true, msg: 'Create Ticket'})
      }
  });
});

router.get('/:id', function(req, res, next){
	Ticket.getTicketById(req.params.id, (err, ticket) =>{
		if(err){
			res.json({success: false, msg: 'No Ticket Exists'})
		}else {
			res.json(ticket)
		}
	});
});

router.put('/:id', function(req, res, next){
	var editedTicket = new Ticket({
		_id: req.params.id,
    title: req.body.title,
    description: req.body.description,
  });

	Ticket.findOneAndUpdate({_id: req.params.id}, editedTicket , function(err, ticket) {
    if (err){
			res.json({success: false, msg: 'Failed to Register'})
    }
    res.json(ticket);
  });
});

router.delete('/', function(req, res, next){
	Ticket.remove({}, function(err, ticket) {
		if (err)
			res.json({succes: false, msg: 'Failed to delete'});
		res.json({ message: 'Tickets successfully deleted' });
	});
});

router.post('/like', function(req,res, next){
	Ticket.findByIdAndUpdate(req.body.id, {$inc: {like:1}}, function (err, ticket){
    if(err){
      return next(err);
    }
    res.json(ticket);
  });
});
router.post('/dislike', function(req,res, next){
	Ticket.findByIdAndUpdate(req.body.id, {$inc: {dislike:1}}, function (err, ticket){
    if(err){
      return next(err);
    }
    res.json(ticket);
  });
});

module.exports = router;
