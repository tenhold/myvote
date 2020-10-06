const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys.js');
const User = require('../../db/models/Users.js');
require('dotenv').config();

passport.use(
  new GoogleStrategy(
    {
      // Options for the google strategy
      callbackURL: '/auth/google/redirect',
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
    },
    (accessToken, refreshToken, profile, done) => {
      // Passport cb function
      console.log(profile);

      // Check if User is already in database
      User.findOne({ voter_device_id: profile.id }).then((currentUser) => {
        if (currentUser) {
          // User already in database
          console.log('User is: ', currentUser);
        } else {
          // If not, create new User
          new User({
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            voter_device_id: profile.id,
            email: 'kllanosopspark@gmail.com',
            address: '4233 Fontainebleau Dr., Unit 7, New Orleans, LA 70125',
          })
            .save()
            .then((newUser) => {
              console.log('Added user: ', newUser);
            })
            .catch((err) => {
              console.log('Could not save user to database.', err);
            });
        }
      });
    }
  )
);
