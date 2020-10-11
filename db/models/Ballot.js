const { Schema, model } = require("mongoose");

const ballotSchema = new Schema({
  voter_id: String,
  id: Number,
  contest_office_id: Number,
  contest_office_we_vote_id: String,
  contest_office_name: String,
  ballot_item_display_name: String,
  party: String,
  candidate_photo_url_medium: String,
  kind_of_ballot_item: String,
  ballotpedia_candidate_url: String
});

const Ballot = model("Ballot", ballotSchema);

module.exports = Ballot;
