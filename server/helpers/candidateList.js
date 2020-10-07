const electionData = require('../../data.json');
const axios = require('axios');

const getCandidateList = (race) => {
  axios.get(`https://api.wevoteusa.org/apis/v1/allBallotItemsRetrieve`, {
    params: {
      voter_device_id: 'FCs2HmyC7RoyJ6EqfcnpIAH8S2xOxo9v6FUvlndfSfedcOYOIg7LMAOWDOsDIAYf38rPAGS2HjYPJV0fLt2yZAre',
      google_civic_election_id: 1000112,
      state_code: 'la'
    }
  })
    .then(data => {
      console.log('axios GETTTTTTTTT', data);
    })
    .catch(err => console.err('error in axios get', err))
}










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