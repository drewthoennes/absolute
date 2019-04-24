const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const saltRounds = 10;

var UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  hash: {
    type: String
  },
  game: {
    type: Object,
    default: {}
  }
}, {
  collection: 'users'
});

UserSchema.virtual('password').set(function(password) {
  this._password = password;
});

UserSchema.pre('save', function(next) {
  const user = this;

  if (user && user.hash && user.hash !== undefined) {
    next();
    return;
  }
  else {
    bcrypt.hash(user._password, saltRounds, function(err, hash) {
      if (err) {
        next(err);
        return;
      }

      user.hash = hash;

      next();
      return;
    });
  }
});

UserSchema.methods.verifyPassword = function verifyPassword(candidate, cb) {
  bcrypt.compare(candidate, this.hash, function(err, match) {
    if (err) {
      return cb(err);
    }

    cb(null, match);
  });
}

module.exports = mongoose.model('User', UserSchema);
