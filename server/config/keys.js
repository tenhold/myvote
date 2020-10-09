require('dotenv').config();

const { CLIENT_ID, CLIENT_SECRET, COOKIE_KEY } = process.env;

module.exports = {
  google: {
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
  },
  session: {
    cookieKey: COOKIE_KEY,
  },
};
