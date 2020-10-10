const axios = require('axios');
const { ballot_item_list } = require('../../src/components/response.json');


const saveCandidates = async (candidate, voterId) => {
  const {
    party,
    ballot_item_display_name: name,
    candidate_photo_url_medium: image,
    contest_office_id: officeId,
    contest_office_name: office,
    contest_office_we_vote_id: officeWeVoteId,
    kind_of_ballot_item: ballotItem,
  } = candidate;

  const postBallot = await axios.patch(`/api/ballots/${voterId}`, { party: 'democrat' })
  console.log(postBallot)
};

module.exports = saveCandidates;