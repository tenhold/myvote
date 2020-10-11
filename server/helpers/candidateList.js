const axios = require('axios');
const createVoterId = require('./createVoterId');


const getCandidateList = async (voterDeviceId, address) => {
  try {
    const getList = await axios.get('https://api.wevoteusa.org/apis/v1/voterAddressSave/', {
      params: {
        voter_device_id: voterDeviceId,
        text_for_map_search: address
      }
    });
    return
  } catch (err) {
    console.error('getCandidateList ERROR: ', err);
  }
};


/////////////////////         example of use          /////////////////////

// createVoterId()
//   .then(data => {
//     const { voter_device_id } = data.data;
//     getCandidateList(voter_device_id, '1217 Magazine St nola la')
//       .then(data => {
//       });
//   });


///////////////////         test data             ///////////////////

const getCandidateListTest = (race) => {
  const { ballot_item_list } = electionData;
  return ballot_item_list.reduce((ballotRace, curBallotRace) => {
    if (curBallotRace.ballot_item_display_name === race) {
      ballotRace = curBallotRace.candidate_list;
    }
    return ballotRace;
  }, {})
  // .map(candidates => candidates.ballot_item_display_name);
}


module.exports = getCandidateList;