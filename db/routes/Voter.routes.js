const router = require('express').Router();
const { VoterBadge } = require('../models/Badges');


router.post('/api/voter_badge', async (req, res) => {
  const { url } = req.body;
  try {
    const voter = await VoterBadge.create({ url });
    res.status(201).send(voter);
  }
  catch (err) {
    console.error('POST error VOTER BADGE:', err);
    res.sendStatus(500);
  }
});

router.get('/api/voter_badge', async (req, res) => {
  try {
    const voter = await VoterBadge.find();
    res.status(200).send(voter);
  }
  catch (err) {
    console.error('GET error VOTER BADGE: ', err);
    res.sendStatus(500);
  }
});


module.exports = router;