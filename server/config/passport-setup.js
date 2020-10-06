const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys.js');
require('dotenv').config();
const { CLIENT_ID, CLIENT_SECRET } = process.env;

passport.use(
  new GoogleStrategy(
    {
      // Options for the google strategy
      callbackURL: '/auth/google/redirect',
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
    },
    (profile, done) => {
      // Passport cb function
      console.log('hello');
      console.log(profile);
    }
  )
);
