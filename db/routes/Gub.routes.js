const router = require('express').Router();
const { GubBadge } = require('../models/Badges');


router.post('/api/gub_badge', async (req, res) => {
  const { url } = req.body;
  try {
    const gub = await GubBadge.create({ url });
    res.status(201).send(gub);
  }
  catch (err) {
    console.error('POST error gub BADGE:', err);
    res.sendStatus(500);
  }
});

router.get('/api/gub_badge', async (req, res) => {
  try {
    const gub = await GubBadge.find();
    res.status(200).send(gub);
  }
  catch (err) {
    console.error('GET error gub BADGE: ', err);
    res.sendStatus(500);
  }
});


module.exports = router;