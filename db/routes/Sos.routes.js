const router = require('express').Router();
const { SosBadge } = require('../models/Badges');

router.post('/api/sos_badge', async (req, res) => {
  const { url } = req.body;
  try {
    const voter = await SosBadge.create({ url });
    res.status(201).send(voter);
  }
  catch (err) {
    console.error('POST error VOTER BADGE:', err);
    res.sendStatus(500);
  }
});

router.get('/api/sos_badge', async (req, res) => {
  try {
    const voter = await SosBadge.find();
    res.status(200).send(voter);
  }
  catch (err) {
    console.error('GET error VOTER BADGE: ', err);
    res.sendStatus(500);
  }
});

module.exports = router;