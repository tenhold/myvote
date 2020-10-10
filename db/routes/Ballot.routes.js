const router = require('express').Router();
const { findOneAndUpdate } = require('../models/Ballot');
const Ballot = require('../models/Ballot');


router.post('/add', async (req, res) => {
  const { voter_id } = req.body;
  const ballot = await Ballot
    .create({ voter_id });
  res.status(201).send(ballot);
});

router.patch('/:voterId', async (req, res) => {
  const { voterId } = req.params;
  console.log(voterId)
  const { party } = req.body;
  const getUser = await Ballot.findOne({ voter_id: voterId })
  console.log('patch party!', getUser);
});

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