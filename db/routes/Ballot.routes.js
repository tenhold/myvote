const router = require('express').Router();
const Ballot = require('../models/Ballot');


router.post('/api/ballot', async (req, res) => {
  const {
    userId,
    president,
    house,
    senate,
    districtAttorney,
    schoolBoard,
    trafficCourt,
    juvenileCourt,
    criminalCourt,
    civilCourt
  } = req.body;
  try {
    const ballot = await Ballot
      .create({
        userId,
        president,
        house,
        senate,
        districtAttorney,
        schoolBoard,
        trafficCourt,
        juvenileCourt,
        criminalCourt,
        civilCourt
      });
    res.status(201).send(ballot);
  }
  catch (err) {
    console.error('POST error ballot: ', err);
    res.sendStatus(500);
  }
});

router.get('/api/ballot', async (req, res) => {
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