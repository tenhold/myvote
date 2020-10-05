const router = require('express').Router();
const { PotusBadge } = require('../models/Badges');


router.post('/api/potus_badge', async (req, res) => {
  const { url } = req.body;
  try {
    const potus = await PotusBadge.create({ url });
    potus ? res.status(201).send(potus) : res.sendStatus(404);
  }
  catch (err) {
    res.send('POST error potus BADGE:', err);
  }
});

router.get('/api/potus_badge', async (req, res) => {
  try {
    const potus = await PotusBadge.find();
    potus ? res.status(200).send(potus) : res.sendStatus(404);
  }
  catch (err) {
    res.status(500).send('GET error potus BADGE: ', err);
  }
});


module.exports = router;