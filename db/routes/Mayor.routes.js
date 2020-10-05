const router = require('express').Router();
const { MayorBadge } = require('../models/Badges');

router.post('/api/mayor_badge', async (req, res) => {
  const { url } = req.body;
  try {
    const mayor = await MayorBadge.create({ url });
    res.status(201).send(mayor);
  }
  catch (err) {
    console.error('POST error mayor BADGE:', err);
    res.sendStatus(500);
  }
});

router.get('/api/mayor_badge', async (req, res) => {
  try {
    const mayor = await MayorBadge.find();
    res.status(200).send(mayor);
  }
  catch (err) {
    console.error('GET error mayor BADGE: ', err);
    res.sendStatus(500);
  }
});

module.exports = router;