const router = require('express').Router();
const { SosBadge } = require('../models/Badges');

router.post('/api/sos_badge', async (req, res) => {
  const { url } = req.body;
  try {
    const voter = await SosBadge.create({ url });
    voter ? res.status(201).send(voter) : res.sendStatus(404);
  }
  catch (err) {
    res.send('POST error VOTER BADGE:', err);
  }
});

router.get('/api/sos_badge', async (req, res) => {
  try {
    const voter = await SosBadge.find();
    voter ? res.status(200).send(voter) : res.sendStatus(404);
  }
  catch (err) {
    res.status(500).send('GET error VOTER BADGE: ', err);
  }
});

module.exports = router;