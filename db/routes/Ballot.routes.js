const router = require('express').Router();
const { findOneAndUpdate, find } = require('../models/Ballot');
const Ballot = require('../models/Ballot');

const handlePost = (async (req, res) => {
  const { voter_id } = req.params;
  const {
    candidateId,
    officeId,
    officeWeVoteId,
    office,
    name,
    party,
    image,
    ballotItem
  } = req.body

  const findCandidate = await Ballot
    .findOneAndUpdate({ voter_id, officeId }, {
      voter_id,
      candidateId,
      officeId,
      officeWeVoteId,
      office,
      name,
      party,
      image,
      ballotItem
    });
  console.log('find candidate????', findCandidate)

  if (!findCandidate) {
    const ballot = await Ballot
      .create({
        voter_id,
        candidateId,
        officeId,
        officeWeVoteId,
        office,
        name,
        party,
        image,
        ballotItem
      });
    res.status(201).send(ballot);
  } else {
    res.status(404).send('added or updated office')
  }
});

router.get('/:voter_id', (req, res) => {
  const { voter_id } = req.params;
  console.log('req params', req.params)
  Ballot.find({ voter_id })
    .then(data => {
      console.log(data);

      res.send(data)
    });
});

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