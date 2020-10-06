const { Schema, model } = require('mongoose');

const ballotSchema = new Schema({
  // what info do we need to store.
<<<<<<< HEAD
  userId: {
    type: String,
    unique: true,
    required: true
  },
  president: String,
  house: String,
  senate: String,
  districtAttorney: String,
  schoolBoard: String,
  trafficCourt: String,
  juvenileCourt: String,
  criminalCourt: String,
  civilCourt: String
});

const Ballot = model('Ballot', ballotSchema);

module.exports = Ballot;
=======
});
>>>>>>> 670e1d0... [Feature] Add React file structure and components. Add Homepage navigation bar.
