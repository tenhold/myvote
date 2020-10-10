const axios = require('axios');
const createVoterId = require('./createVoterId');
const getVoterAddress = require('./weVoteAddress');

// function to create a new user

const newUserCreate = async (email, googleId, givenName, familyName) => {
  // look in the database to see if the email already exists
  const findUser = await axios.get(`/api/users/${email}`);

  // if the user is not found then call the wevote api and get voter ids
  if (!findUser.data.email) {
    const voterInfo = await createVoterId();
    const { voter_device_id, voter_id, voter_we_vote_id } = voterInfo.data;

    const voterAddress = await getVoterAddress();
    const { voter_location: address } = voterAddress.data;

    const newUser = await axios.post('/api/users/add', {
      voter_device_id,
      voter_id,
      voter_we_vote_id,
      email,
      googleId,
      givenName,
      familyName,
      address
    });
    console.info('user created');
    return newUser;
  } else {
    console.info('user exists');
    return findUser;
  }
};

module.exports = newUserCreate;