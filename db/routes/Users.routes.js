const router = require('express').Router();
const Users = require('../models/Users');


router.get('/api/user', async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).send(users);

  }
  catch (err) {
    res.status(500).send('ERROR in user GET');
  }
});

router.post('/api/user', async (req, res) => {
  const {
    email,
    password,
    salt,
    firstName,
    lastName,
    DOB,
    party,
    address
  } = req.body;
  try {
    const user = await Users.create({
      email,
      password,
      salt,
      firstName,
      lastName,
      DOB,
      party,
      address
    });
    res.status(201).send(user);
  }
  catch (err) {
    console.error('error in post! ', err);
    res.status(500).send('ERROR in user POST');
  }
});

////////////////            myPledge put request              ////////////////

router.put('api/user/:id', async (req, res) => {
  // const { _id } = req.params;
  console.log('hellllllllllllooooooooo');
});


module.exports = router;