const router = require('express').Router();
const { findOneAndUpdate, find } = require('../models/Ballot');
const Ballot = require('../models/Ballot');

const handlePost = (async (req, res) => {
  const { voter_id } = req.params;
  const {
    id,
    contest_office_id,
    contest_office_we_vote_id,
    contest_office_name,
    ballot_item_display_name,
    party,
    candidate_photo_url_medium,
    kind_of_ballot_item,
    ballotpedia_candidate_url
  } = req.body

  const findCandidate = await Ballot
    .findOneAndUpdate({ voter_id, contest_office_id }, {
      voter_id,
      id,
      contest_office_id,
      contest_office_we_vote_id,
      contest_office_name,
      ballot_item_display_name,
      party,
      candidate_photo_url_medium,
      kind_of_ballot_item,
      ballotpedia_candidate_url
    });
  console.log('find candidate????', findCandidate)

  if (!findCandidate) {
    const ballot = await Ballot
      .create({
        voter_id,
        id,
        contest_office_id,
        contest_office_we_vote_id,
        contest_office_name,
        ballot_item_display_name,
        party,
        candidate_photo_url_medium,
        kind_of_ballot_item,
        ballotpedia_candidate_url
      });
    res.status(201).send(ballot);
  } else {
    res.status(404).send('added or updated office')
  }
});


router.get('/', async (req, res) => {
  console.log('are you checking????????????????')
  try {
    const ballot = await Ballot.find();
    res.status(200).send(ballot);
  }
  catch (err) {
    console.error('GET error ballot: ', err);
    res.status(500).send('GET error ballot: ', err);
  }
});

router.get('/:voter_id', (req, res) => {
  const { voter_id } = req.params;
  Ballot.find({ voter_id })
    .then(data => {
      res.send(data)
    });
});

router.post('/:voter_id', (req, res) => {
  handlePost(req, res);
});

router.patch('/:voter_id', (req, res) => {
  handlePost(req, res);
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleteIt = await Ballot.findOneAndDelete({ contest_office_id: id });
    res.status(200).send('DELETED!');
  } catch (err) {
    res.status(500);
  }
});


module.exports = router;