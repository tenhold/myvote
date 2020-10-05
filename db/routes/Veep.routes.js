const router = require('express').Router();
const { VeepBadge } = require('../models/Badges');


router.post('/api/veep_badge', async (req, res) => {
  const { url } = req.body;
  try {
    const veep = await VeepBadge.create({ url });
    veep ? res.status(201).send(veep) : res.sendStatus(404);
  }
  catch (err) {
    res.send('POST error veep BADGE:', err);
  }
});

router.get('/api/veep_badge', async (req, res) => {
  try {
    const veep = await VeepBadge.find();
    veep ? res.status(200).send(veep) : res.sendStatus(404);
  }
  catch (err) {
    res.status(500).send('GET error veep BADGE: ', err);
  }
});


module.exports = router;