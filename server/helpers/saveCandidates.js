const axios = require('axios');
const { ballot_item_list } = require('../../src/components/response.json');


//////////////////////////////////    used for myElection api call    ////////////////////////////////////////

const saveCandidates = async (candidate, voterId) => {
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

  const postBallot = await axios.post(`/api/ballots/${voterId}`, {
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

//////////////////////////////////    used for routes in the db    ////////////////////////////////////////

const handlePost = (async (req, res) => {
  const { voter_id } = req.params;
  const {
    candidateId,
    officeId,
    officeWeVoteId,
    office,
    name,
    party,
    image,
    ballotItem
  } = req.body

  const findCandidate = await Ballot
    .findOneAndUpdate({ voter_id, officeId }, {
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

  if (!findCandidate) {
    const ballot = await Ballot
      .create({
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
    res.status(201).send(ballot);
  } else {
    res.status(404).send('added or updated office')
  }
});


// const saveCandidates = async (candidate, voterId) => {
//   const {
//     party,
//     ballot_item_display_name: name,
//     candidate_photo_url_medium: image,
//     contest_office_id: officeId,
//     contest_office_name: office,
//     contest_office_we_vote_id: officeWeVoteId,
//     kind_of_ballot_item: ballotItem,
//   } = candidate;

//   console.log('save candidate', candidate)

//   const officesRegExp = /(president)|(house)|(senate)|(district)|(school)|(juvenile)|(criminal)|(civil)|(traffic)/i;
//   const getOffice = ((str, regex) => {
//     return str.match(regex)[0].toLowerCase();
//   });
//   const parsedOffice = getOffice(office, officesRegExp);
//   console.log('parsed office name', parsedOffice)



//   const postBallot = await axios.patch(`/api/ballots/${voterId}`, {
//     // office: {
//     //   name,
//     //   party,
//     //   image,
//     //   office,
//     //   officeId,
//     //   officeWeVoteId,
//     //   ballotItem,
//     // }
//   })
//   console.log(postBallot)
// };

module.exports = { saveCandidates, handlePost };