const axios = require('axios');
const { ballot_item_list } = require('../../src/components/response.json');


//////////////////////////////////    used for myElection api call    ////////////////////////////////////////

const saveCandidates = async (candidate, voter_id) => {
  const {
    contest_office_id: officeId,
    id: candidateId,
    contest_office_name: office,
    contest_office_we_vote_id: officeWeVoteId,
    ballot_item_display_name: name,
    party,
    candidate_photo_url_medium: image,
    kind_of_ballot_item: ballotItem,
  } = candidate;

  console.log('save candidate', candidate);

  const postBallot = await axios.post(`/api/ballots/${voter_id}`, {
    voter_id,
    candidateId,
    officeId,
    officeWeVoteId,
    office,
    name,
    party,
    image,
    ballotItem
  });
  console.log(postBallot)
};

module.exports = { saveCandidates };