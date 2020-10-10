const { Schema, model } = require("mongoose");

const ballotSchema = new Schema({
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
    ballotItem: String
  },
  house: {
    name: String,
    party: String,
    image: String,
    officeId: Number,
    office: String,
    officeWeVoteId: String,
    ballotItem: String
  },
  senate: {
    name: String,
    party: String,
    image: String,
    officeId: Number,
    office: String,
    officeWeVoteId: String,
    ballotItem: String
  },
  district: {
    name: String,
    party: String,
    image: String,
    officeId: Number,
    office: String,
    officeWeVoteId: String,
    ballotItem: String
  },
  school: {
    name: String,
    party: String,
    image: String,
    officeId: Number,
    office: String,
    officeWeVoteId: String,
    ballotItem: String
  },
  traffic: {
    name: String,
    party: String,
    image: String,
    officeId: Number,
    office: String,
    officeWeVoteId: String,
    ballotItem: String
  },
  juvenile: {
    name: String,
    party: String,
    image: String,
    officeId: Number,
    office: String,
    officeWeVoteId: String,
    ballotItem: String
  },
  criminal: {
    name: String,
    party: String,
    image: String,
    officeId: Number,
    office: String,
    officeWeVoteId: String,
    ballotItem: String
  },
  civil: {
    name: String,
    party: String,
    image: String,
    officeId: Number,
    office: String,
    officeWeVoteId: String,
    ballotItem: String
  }
});

const Ballot = model("Ballot", ballotSchema);

module.exports = Ballot;
