var mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/mongo');

var Schema = mongoose.Schema;

var UserSchema = Schema({
  name: {type: String, required: true},
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String,required: true},
  role: {type: String}
});

const User = module.exports = mongoose.model('User', UserSchema);

// Add User to Database
module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
        if(err) console.log(err);
        newUser.password = hash;
        newUser.save(callback);
    });
  });
}
