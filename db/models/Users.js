const { Schema, model } = require('mongoose');

const usersSchema = new Schema({
<<<<<<< HEAD
  voter_device_id: {  // retreved from the we vote api
    type: String,
    unique: true,
    // required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
=======
  email: {
    unique: true,
    required: true,
    type: String
>>>>>>> 670e1d0... [Feature] Add React file structure and components. Add Homepage navigation bar.
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