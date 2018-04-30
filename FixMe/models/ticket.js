var mongoose = require('mongoose');
var config = require('../config/mongo');

var Schema = mongoose.Schema;

var TicketSchema = Schema({
	title: {type: String, required: true},
	description: {type: String, required: true},
	link: {type: String},
	like: {type: Number, required: true, default: 0}
});

var Ticket = module.exports = mongoose.model('Ticket', TicketSchema);

module.exports.addTicket = function(newTicket, callback){
	newTicket.save(callback);
}

module.exports.getTicketById = function(id, callback) {
  Ticket.findById(id, callback);
}
