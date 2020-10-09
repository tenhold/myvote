const axios = require('axios');
const createVoterId = require('./createVoterId');

// function to create a new user

const newUserCreate = async (email, googleId, givenName, familyName) => {
  try {
    // look in the database to see if the email already exists
    const findUser = await axios.get(`/api/users/${email}`);
    // if the user is not found then call the wevote api and get voter ids
    if (!findUser) {
      const voterInfo = await createVoterId();
      const { voter_device_id, voter_id, voter_we_vote_id } = voterInfo.data;

      await axios.post('/api/users/add', {
        voter_device_id,
        voter_id,
        voter_we_vote_id,
        email,
        googleId,
        givenName,
        familyName
      });
    } else {
      console.info('user exists');
    }
  } catch (err) {
    console.error('ERROR in newUserCreate', err);
  }
};

module.exports = newUserCreate;