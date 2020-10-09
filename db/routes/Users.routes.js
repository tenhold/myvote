const router = require('express').Router({ mergeParams: true });
const Users = require('../models/Users');

router.get('/', async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).send(users);
  } catch (err) {
    console.error('ERROR in user GET');
    res.sendStatus(500);
  }
});

router.post('/add', async (req, res) => {
  console.log(req.body);
  const {
    email,
    password,
    salt,
    firstName,
    lastName,
    DOB,
    party,
    address,
    city,
    state,
    zipcode,
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
      address,
      city,
      state,
      zipcode,
    });
    res.status(201).send(user);
  } catch (err) {
    console.error('ERROR in user POST');
    res.sendStatus(500);
  }
});

////////////////            myPledge put request              ////////////////

router.patch('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Users.findByIdAndUpdate(id, req.body);
    const getUdatedUser = await Users.findOne({ _id: id });

    getUdatedUser ? res.status(200).send(getUdatedUser) : res.sendStatus(404);

  } catch (err) {
    console.error('error in patch! ', err);
    res.sendStatus(500);
  }
});

module.exports = router;
