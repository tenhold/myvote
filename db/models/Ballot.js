const { Schema, model } = require("mongoose");

const ballotSchema = new Schema({
  // what info do we need to store.
  user_id: Number,
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
  districtAttorney: {
    name: String,
    party: String,
    image: String,
    officeId: Number,
    office: String,
    officeWeVoteId: String,
    ballotItem: String
  },
  schoolBoard: {
    name: String,
    party: String,
    image: String,
    officeId: Number,
    office: String,
    officeWeVoteId: String,
    ballotItem: String
  },
  trafficCourt: {
    name: String,
    party: String,
    image: String,
    officeId: Number,
    office: String,
    officeWeVoteId: String,
    ballotItem: String
  },
  juvenileCourt: {
    name: String,
    party: String,
    image: String,
    officeId: Number,
    office: String,
    officeWeVoteId: String,
    ballotItem: String
  },
  criminalCourt: {
    name: String,
    party: String,
    image: String,
    officeId: Number,
    office: String,
    officeWeVoteId: String,
    ballotItem: String
  },
  civilCourt: {
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
