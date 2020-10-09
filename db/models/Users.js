const { Schema, model } = require('mongoose');
// const mongoose = require('mongoose');
// const { TRUE } = require('node-sass');

const usersSchema = new Schema({
  voter_device_id: {
    // retreved from the we vote api
    type: String,
    unique: true,
    // required: true
  },
  voter_id: {
    type: String,
    unique: true,
  },
  voter_we_vote_id: {
    type: String,
    unique: true
  },
  googleId: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
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
    default: null,
  },
  party: {
    type: String,
    default: 'independent',
  },
  address: {
    type: String,
    // required: true,
  },
  // city: {
  //   type: String,
  //   // required: true,
  // },
  // state: {
  //   type: String,
  //   // required: true,
  // },
  // zipcode: {
  //   type: String,
  //   // required: true,
  // },
  pledge: {
    type: Number,
    default: 1,
  },
  badgeUrl: String,
  badgeId: {
    type: Number,
    default: 1,
  },
});

const Users = model('Users', usersSchema);

module.exports = Users;
