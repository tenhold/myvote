const router = require('express').Router();
const { findOneAndUpdate, find } = require('../models/Ballot');
const Ballot = require('../models/Ballot');


router.post('/:voter_id', async (req, res) => {
  const { voter_id } = req.params;
  console.log('user id', voter_id);
  console.log('post in ballot', req.body);
  const {
    officeId,
    officeWeVoteId,
    office,
    name,
    party,
    image,
    ballotItem
  } = req.body

  const findBallot = await Ballot.findOne({ office });

  console.log('find ballot office', findBallot)

  // check to see if ballot exists
  // if not create ballot
  // if so check to see if the candidate is the same
  // if not then patch that item
  if (!findBallot) {
    const ballot = await Ballot
      .create({
        voter_id,
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
    res.status(404).send('already added office')
  }

});

// router.post('/:voter_id', async (req, res) => {
//   const { voter_id } = req.params;
//   console.log('user id', voter_id);
//   console.log('post in ballot', req.body);
//   const {
//     name,
//     party,
//     image,
//     officeId,
//     office,
//     officeWeVoteId,
//     ballotItem
//   } = req.body

//   const ballot = await Ballot
//     .create({
//       voter_id,
//       office,
//       name,
//       party,
//       image,
//       officeId,
//       officeWeVoteId,
//       ballotItem

//     });
//   res.status(201).send(ballot);
// });

// router.post('/add', async (req, res) => {
//   const {
//     voter_id
//   } = req.body;
//   console.log('post!!!!', voter_id)
//   const ballot = await Ballot
//     .create({ voter_id });
//   res.status(201).send(ballot);
// });

// router.patch('/:voter_id', async (req, res) => {
//   const { voter_id } = req.params;
//   console.log(req.params);
//   console.log('patch in ballot', req.body);
//   const { party } = req.body;
//   const getUser = await Ballot.findOneAndUpdate({ voter_id }, req.body);
//   res.status(201).send(getUser);
// });

// router.post('/add', async (req, res) => {
//   const {
//     userId,
//     president,
//     house,
//     senate,
//     districtAttorney,
//     schoolBoard,
//     trafficCourt,
//     juvenileCourt,
//     criminalCourt,
//     civilCourt
//   } = req.body;
//   try {
//     const ballot = await Ballot
//       .create({
//         userId,
//         president,
//         house,
//         senate,
//         districtAttorney,
//         schoolBoard,
//         trafficCourt,
//         juvenileCourt,
//         criminalCourt,
//         civilCourt
//       });
//     res.status(201).send(ballot);
//   }
//   catch (err) {
//     console.error('POST error ballot: ', err);
//     res.sendStatus(500);
//   }
// });

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