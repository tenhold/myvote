const router = require('express').Router();
const { MayorBadge } = require('../models/Badges');

router.post('/api/mayor_badge', async (req, res) => {
  const { url } = req.body;
  try {
    const mayor = await MayorBadge.create({ url });
    mayor ? res.status(201).send(mayor) : res.sendStatus(404);
  }
  catch (err) {
    res.send('POST error mayor BADGE:', err);
  }
});

router.get('/api/mayor_badge', async (req, res) => {
  try {
    const mayor = await MayorBadge.find();
    mayor ? res.status(200).send(mayor) : res.sendStatus(404);
  }
  catch (err) {
    res.status(500).send('GET error mayor BADGE: ', err);
  }
});

module.exports = router;