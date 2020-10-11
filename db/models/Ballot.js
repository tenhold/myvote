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
  candidateId: Number,
  officeId: Number,           // contest_office_id
  officeWeVoteId: String,     // contest_office_we_vote_id
  office: String,             // contest_office_name
  name: String,               // ballot_item_display_name
  party: String,
  image: String,              // candidate_photo_url_medium
  ballotItem: String,         // kind_of_ballot_item
});

const Ballot = model("Ballot", ballotSchema);

module.exports = Ballot;
