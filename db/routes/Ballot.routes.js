const router = require('express').Router();
const { handlePost } = require('../../server/helpers/saveCandidates');
const { findOneAndUpdate, find } = require('../models/Ballot');
const Ballot = require('../models/Ballot');


router.post('/:voter_id', (req, res) => {
  handlePost(req, res);
});

router.patch('/:voter_id', (req, res) => {
  handlePost(req, res);
});


router.get('/', async (req, res) => {
  try {
    const ballot = await Ballot.find();
    res.status(200).send(ballot);
  }
  catch (err) {
    console.error('GET error ballot: ', err);
    res.status(500).send('GET error ballot: ', err);
  }
});


module.exports = router;