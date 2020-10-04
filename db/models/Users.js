const { Schema, model } = require('mongoose');

const usersSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: String,
  salt: String,
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    default: null
  },
  party: {
    type: String,
    default: 'independent'
  },
  address: {
    type: String,
    required: true
  },
  vote: {
    type: Number,
    default: 1
  },
  badgeUrl: String,
  badgeId: {
    type: Number,
    default: 1
  }
});

const Users = model('Users', usersSchema);

module.exports = Users;