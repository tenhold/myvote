const axios = require('axios');
const { ballot_item_list } = require('../../src/components/response.json');


//////////////////////////////////    used for myElection api call    ////////////////////////////////////////

const saveCandidates = async (candidate, voter_id) => {
  const {
    contest_office_id,
    id,
    contest_office_name,
    contest_office_we_vote_id,
    ballot_item_display_name,
    party,
    candidate_photo_url_medium,
    kind_of_ballot_item,
  } = candidate;

  console.log('save candidate', candidate);

  const postBallot = await axios.post(`/api/ballots/${voter_id}`, {
    voter_id,
    contest_office_id,
    id,
    contest_office_we_vote_id,
    contest_office_name,
    ballot_item_display_name,
    party,
    candidate_photo_url_medium,
    kind_of_ballot_item
  });
};


module.exports = { saveCandidates };