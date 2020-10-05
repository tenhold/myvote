const express = require("express");
require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");
const connectDB = require("../db/index");
const { SERVER_PORT } = process.env;

<<<<<<< HEAD

const usersRoute = require("../db/routes/Users.routes");
const badgesRoute = require("../db/routes/Badges.routes");

const usersRoute = require('../db/routes/Users.routes');
const voterRoute = require('../db/routes/Voter.routes');

=======
>>>>>>> fbc001ee174ad4b42938065280b99ac6179d0731
//////////////////            ROUTES TO DATABASE            /////////////////
/////////////////////////////////////////////////////////////////////////////

const usersRoute = require('../db/routes/Users.routes');
const voterRoute = require('../db/routes/Voter.routes');
const mayorRoute = require('../db/routes/Mayor.routes');
const sosRoute = require('../db/routes/Sos.routes');
const gubRoute = require('../db/routes/Gub.routes');
const veepRoute = require('../db/routes/Veep.routes');
const potusRoute = require('../db/routes/Potus.routes');


const DIR = path.join(__dirname, "../build");
const html_file = path.join(DIR, "index.html");
const app = express();

app.use(express.static(DIR));
app.use(bodyParser.json());

<<<<<<< HEAD
=======

///////////////         routes for database            ///////////////
>>>>>>> fbc001ee174ad4b42938065280b99ac6179d0731

///////////////         routes for database            ///////////////
app.use(usersRoute);
app.use(voterRoute);
app.use(mayorRoute);
app.use(sosRoute);
app.use(gubRoute);
app.use(veepRoute);
app.use(potusRoute);
<<<<<<< HEAD
=======

>>>>>>> fbc001ee174ad4b42938065280b99ac6179d0731


app.get("/", (req, res) => {
  res.sendFile(html_file);
});

connectDB().then(() => {
  app.listen(SERVER_PORT, () => {
    console.info(`listening on http://localhost:${SERVER_PORT}`);
  });
});
