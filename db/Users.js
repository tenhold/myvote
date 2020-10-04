const { Schema, model } = require('mongoose');

const usersSchema = new Schema({
  firstName: String,
  lastName: String,
  DOB: {
    type: String,
    default: null
  },
});

const Users = model('Users', usersSchema);

module.exports = Users;