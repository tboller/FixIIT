var mongoose = require('mongoose');
var config = require('../config/mongo');

var Schema = mongoose.Schema;

var TicketSchema = Schema({
	title: {type: String, required: true},
	description: {type: String, required: true}
});

var Ticket = module.exports = mongoose.model('Ticket', TicketSchema);
