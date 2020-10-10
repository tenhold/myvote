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

  console.log('save candidate', candidate)

  const officesRegExp = /(president)|(house)|(senate)|(district)|(school)|(juvenile)|(criminal)|(civil)|(traffic)/i;
  const getOffice = ((str, regex) => {
    return str.match(regex)[0].toLowerCase();
  });
  const parsedOffice = getOffice(office, officesRegExp);
  console.log('parsed office name', parsedOffice)



  const postBallot = await axios.patch(`/api/ballots/${voterId}`, {
    [parsedOffice]: {
      name,
      party,
      image,
      officeId,
      officeWeVoteId,
      ballotItem
    }
  })
  console.log(postBallot)
};

module.exports = saveCandidates;