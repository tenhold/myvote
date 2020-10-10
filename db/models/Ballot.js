const { Schema, model } = require("mongoose");

/** pull in all cadidte info create ballot
 * candidate: {
 *    <office> : {
 *       name: string,
 *       party: string
 *    }
 * }
 */

const ballotSchema = new Schema({
  voter_id: String,
  office: String,
  name: String,               // ballot_item_display_name
  party: String,
  image: String,              // candidate_photo_url_medium
  officeId: Number,           // contest_office_id
  office: String,             // contest_office_name
  officeWeVoteId: String,     // contest_office_we_vote_id
  ballotItem: String,         // kind_of_ballot_item
  // ???? level: String
});

const Ballot = model("Ballot", ballotSchema);

module.exports = Ballot;


/*
// what info do we need to store.
  voter_id: Number,
  // unique: true,
  // required: true,

  president: {
    name: String,
    party: String,
    image: String,
    officeId: Number,
    office: String,
    officeWeVoteId: String,
    ballotItem: String,
    level: String,
  },
  house: {
    name: String,
    party: String,
    image: String,
    officeId: Number,
    office: String,
    officeWeVoteId: String,
    ballotItem: String,
    level: String,
  },
  senate: {
    name: String,
    party: String,
    image: String,
    officeId: Number,
    office: String,
    officeWeVoteId: String,
    ballotItem: String,
    level: String,
  },
  district: {
    name: String,
    party: String,
    image: String,
    officeId: Number,
    office: String,
    officeWeVoteId: String,
    ballotItem: String,
    level: String,
  },
  school: {
    name: String,
    party: String,
    image: String,
    officeId: Number,
    office: String,
    officeWeVoteId: String,
    ballotItem: String,
    level: String,
  },
  traffic: {
    name: String,
    party: String,
    image: String,
    officeId: Number,
    office: String,
    officeWeVoteId: String,
    ballotItem: String,
    level: String,
  },
  juvenile: {
    name: String,
    party: String,
    image: String,
    officeId: Number,
    office: String,
    officeWeVoteId: String,
    ballotItem: String,
    level: String,
  },
  criminal: {
    name: String,
    party: String,
    image: String,
    officeId: Number,
    office: String,
    officeWeVoteId: String,
    ballotItem: String,
    level: String,
  },
  civil: {
    name: String,
    party: String,
    image: String,
    officeId: Number,
    office: String,
    officeWeVoteId: String,
    ballotItem: String,
    level: String,
  }
*/