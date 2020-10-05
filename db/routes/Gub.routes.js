const router = require('express').Router();
const { GubBadge } = require('../models/Badges');


router.post('/api/gub_badge', async (req, res) => {
  const { url } = req.body;
  try {
    const gub = await GubBadge.create({ url });
    gub ? res.status(201).send(gub) : res.sendStatus(404);
  }
  catch (err) {
    res.send('POST error gub BADGE:', err);
  }
});

router.get('/api/gub_badge', async (req, res) => {
  try {
    const gub = await GubBadge.find();
    gub ? res.status(200).send(gub) : res.sendStatus(404);
  }
  catch (err) {
    res.status(500).send('GET error gub BADGE: ', err);
  }
});


module.exports = router;