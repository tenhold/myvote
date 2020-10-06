const router = require('express').Router();
const { PotusBadge } = require('../models/Badges');


router.post('/api/potus_badge', async (req, res) => {
  const { url } = req.body;
  try {
    const potus = await PotusBadge.create({ url });
    res.status(201).send(potus);
  }
  catch (err) {
    console.error('POST error potus BADGE:', err);
    res.sendStatus(500);

  }
});

router.get('/api/potus_badge', async (req, res) => {
  try {
    const potus = await PotusBadge.find();
    res.status(200).send(potus);
  }
  catch (err) {
    console.error('GET error potus BADGE: ', err);
    res.sendStatus(500);
  }
});


module.exports = router;