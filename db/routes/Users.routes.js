const router = require('express').Router();
const Users = require('../models/Users');


router.get('/api/user', async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).send(users);

  }
  catch (err) {
    console.error('ERROR in user GET');
    res.sendStatus(500);
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
    console.error('ERROR in user POST');
    res.sendStatus(500);
  }
});

module.exports = router;