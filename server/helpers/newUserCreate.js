const axios = require('axios');
const createVoterId = require('./createVoterId');
const { getVoterAddress } = require('./weVoteAddress');
const getCandidateList = require('./candidateList');

// function to create a new user

const Create = async (email, googleId, givenName, familyName) => {
  // look in the database to see if the email already exists
  const findUser = await axios.get(`/api/users/${email}`);

  // if the user is not found then call the wevote api and get voter ids
  if (!findUser.data.email) {
    const voterInfo = await createVoterId();
    const { voter_device_id, voter_id, voter_we_vote_id } = voterInfo.data;

    const voterAddress = await getVoterAddress();
    const { voter_location: address } = voterAddress.data;

    axios.post('/api/users/add', {
      voter_device_id,
      voter_id,
      voter_we_vote_id,
      email,
      googleId,
      givenName,
      familyName,
      address,
    });
    return;
  } else {
    console.info('user exists');
    return findUser;
  }
};

module.exports = Create;
