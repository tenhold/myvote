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
  id: Number,
  contest_office_id: Number,           // contest_office_id
  contest_office_we_vote_id: String,     // contest_office_we_vote_id
  contest_office_name: String,             // contest_office_name
  ballot_item_display_name: String,               // ballot_item_display_name
  party: String,
  candidate_photo_url_medium: String,              // candidate_photo_url_medium
  kind_of_ballot_item: String,         // kind_of_ballot_item
  ballotpedia_candidate_url: String
});

const Ballot = model("Ballot", ballotSchema);

module.exports = Ballot;
