const router = require('express').Router();
const Users = require('../models/Users');


router.get('/', async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).send(users);

  }
  catch (err) {
    res.status(500).send('ERROR in user GET');
  }
});

router.post('/add', async (req, res) => {
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

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updateUser = await Users.findByIdAndUpdate(id, { $inc: { vote: 1 } });
    updateUser ? res.status(200).send(updateUser) : res.sendStatus(404);
  } catch (err) {
    console.error('error in patch! ', err);
    res.sendStatus(500);
  }

});


module.exports = router;