const axios = require('axios');


const getVoterAddress = async () => {
  return await axios.get('https://api.wevoteusa.org/apis/v1/voterLocationRetrieveFromIP');
};

const updateVoterAddress = async (voter_device_id, text_for_map_search) => {
  return await axios.get('https://api.wevoteusa.org/apis/v1/', {
    params: {
      voter_device_id,
      text_for_map_search
    }
  });
};

module.exports = { updateVoterAddress, getVoterAddress };