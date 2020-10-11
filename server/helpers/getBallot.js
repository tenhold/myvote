const Ballot = require('../../db/models/Ballot');
const router = require('express').Router();
// const axios = require('axios');

getBallot = (voterId) => {
  router.get('/:voterId', (req, res) => {
    console.log(req.body);
    Ballot.find({ voter_id: voterId })
      .then(data => {
        console.log(data);
        console.log('hello')

      })
  })



};
getBallot('266118')
