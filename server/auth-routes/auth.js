const router = require('express').Router();

// Auth Login
router.get('/login', (req, res) => {
  res.render('login');
});
// Auth Logout
router.get('/logout', (req, res) => {
  // Handle with passport
  res.send('Logging out from Google');
});
// Auth with Google
router.get('/google', (req, res) => {
  // Handle with passport
  res.send('Logging in with Google');
});

//////////////////            ROUTES TO PASSPORT/PAGES            ///////////
/////////////////////////////////////////////////////////////////////////////

///////////////         routes for authentication            ///////////////
module.exports = router;
