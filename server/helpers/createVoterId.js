const axios = require('axios');


const createVoterId = async () => {
  try {
    // generate a random device id
    const deviceIdGenerate = await axios.get('https://api.wevoteusa.org/apis/v1/deviceIdGenerate');
    const { voter_device_id } = deviceIdGenerate.data;

    // pass the id and create a voter profile
    const createVoter = await axios.get('https://api.wevoteusa.org/apis/v1/voterCreate', {
      params: { voter_device_id }
    });

    // returns an object that contains the voter_device_id, voter_id and voter_we_vote_id
    return createVoter;
  } catch (err) {
    console.error('createVoterId ERROR: ', err);
  }
}


module.exports = createVoterId;