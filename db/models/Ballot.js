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
});

const Ballot = model("Ballot", ballotSchema);

module.exports = Ballot;
