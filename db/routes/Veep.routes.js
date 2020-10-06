const router = require('express').Router();
const { VeepBadge } = require('../models/Badges');


router.post('/api/veep_badge', async (req, res) => {
  const { url } = req.body;
  try {
    const veep = await VeepBadge.create({ url });
    res.status(201).send(veep);
  }
  catch (err) {
    console.error('POST error veep BADGE:', err);
    res.sendStatus(500);
  }
});

router.get('/api/veep_badge', async (req, res) => {
  try {
    const veep = await VeepBadge.find();
    res.status(200).send(veep);
  }
  catch (err) {
    console.error('GET error veep BADGE: ', err);
    res.sendStatus(500);
  }
});


module.exports = router;