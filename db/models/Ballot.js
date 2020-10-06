const { Schema, model } = require("mongoose");

const ballotSchema = new Schema({
  // what info do we need to store.
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  president: {
    type: String,
    default: null
  },
  house: {
    type: String,
    default: null
  },
  senate: {
    type: String,
    default: null
  },
  districtAttorney: {
    type: String,
    default: null
  },
  schoolBoard: {
    type: String,
    default: null
  },
  trafficCourt: {
    type: String,
    default: null
  },
  juvenileCourt: {
    type: String,
    default: null
  },
  criminalCourt: {
    type: String,
    default: null
  },
  civilCourt: {
    type: String,
    default: null
  }
});

const Ballot = model("Ballot", ballotSchema);

module.exports = Ballot;
