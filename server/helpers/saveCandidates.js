const axios = require('axios');
const { ballot_item_list } = require('../../src/components/response.json');


const saveCandidates = (candidate, voter_id) => {
  const {
    party,
    ballot_item_display_name: name,
    candidate_photo_url_medium: image,
    contest_office_id: officeId,
    contest_office_name: office,
    contest_office_we_vote_id: officeWeVoteId,
    kind_of_ballot_item: ballotItem,
  } = candidate;
  const getVoterId = await axios.get(`/api/users/${voter_id}`);
  console.log(getVoterId);
  axios.patch(`/api/ballots/${}`)
};

module.exports = saveCandidates;