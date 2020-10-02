const express = require('express');
require('dotenv').config();
const { SERVER_PORT } = process.env;
const path = require('path');

const DIR = path.join(__dirname, '../client');
const html_file = path.join(DIR, 'index.html');
const app = express();

app.use(express.static(DIR));

app.get('/', (req, res) => {
  res.sendFile(html_file);
});

app.listen(SERVER_PORT, () => {
  console.info(`listening on http://localhost:${SERVER_PORT}`);
});
