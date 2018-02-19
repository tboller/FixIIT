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

// Get User by ID
module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
}

// Get User by Username
module.exports.getUserByUsername = function(username, callback) {
  const query = {username: username}
  User.findOne(query, callback);
}

// Compare Password
module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
