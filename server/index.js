const express = require('express');
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');


const Users = require('../db/models/Users.js');



const connectDB = require('../db/index');
const { SERVER_PORT } = process.env;

const DIR = path.join(__dirname, '../client');
const html_file = path.join(DIR, 'index.html');
const app = express();

app.use(express.static(DIR));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(html_file);
});

app.post('/api/user', async (req, res) => {
  const { firstName, lastName, DOB } = req.body;
  const user = await Users.create({
    firstName,
    lastName,
    DOB
  })
  try {
    res.send(user).status(200).end();
  }
  catch (err) {
    console.error('error in post! ', err);
  }
});

app.get('/api/user', (req, res) => {
  Users.find()
    .then((users) => {
      console.log(users);

    })

})



connectDB()
  .then(() => {
    app.listen(SERVER_PORT, () => {
      console.info(`listening on http://localhost:${SERVER_PORT}`);
    });
  });
