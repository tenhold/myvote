// const router = require('express').Router();
// const { Ballot } = require('../models/Ballot');

// router.post('/api/ballot', async (req, res) => {
//   const { } = req.body;
//   try {
//     const ballot = await Ballot.create({ url });
//     ballot ? res.status(201).send(ballot) : res.sendStatus(404);
//   }
//   catch (err) {
//     res.send('POST error ballot:', err);
//   }
// });

// router.get('/api/ballot', async (req, res) => {
//   try {
//     const ballot = await Ballot.find();
//     ballot ? res.status(200).send(ballot) : res.sendStatus(404);
//   }
//   catch (err) {
//     res.status(500).send('GET error ballot: ', err);
//   }
// });


// module.exports = router;