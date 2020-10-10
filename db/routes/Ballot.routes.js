const router = require('express').Router();
const Ballot = require('../models/Ballot');


router.post('/add', async (req, res) => {
  const { user_id } = req.body;
  console.log(user_id);
  try {
    const ballot = await Ballot
      .create({ user_id });
    res.status(201).send(ballot);
  }
  catch (err) {
    console.error('POST error ballot: ', err);
    res.sendStatus(500);
  }
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