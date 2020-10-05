const router = require('express').Router();
const {
  VoterBadge,
  MayorBadge,
  SosBadge,
  GubBadge,
  VeepBadge,
  PotusBadge
} = require('../db/models/Badges');




router.post('/api/voter_badge', async (req, res) => {
  const { url } = req.body;
  try {
    const voter = await VoterBadge.create({ url });
    voter ? res.send(voter).sendStatus(200) : res.sendStatus(404);
  }
  catch (err) {
    res.send('POST error:', err).sendStatus(500);
  }
});


module.exports = router;