const axios = require('axios');

const getVoterAddress = async () => {
  return await axios.get('https://api.wevoteusa.org/apis/v1/voterLocationRetrieveFromIP');
}

module.exports = getVoterAddress;