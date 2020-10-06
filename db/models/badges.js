<<<<<<< HEAD
const { Schema, model, connection } = require('mongoose');

const createBadgeSchema = (number, imageURL) => {
=======
const { Schema, model } = require('mongoose');


const createBadgeSchema = (number) => {
>>>>>>> 670e1d0... [Feature] Add React file structure and components. Add Homepage navigation bar.
  return new Schema({
    _id: {
      required: true,
      type: Number,
      default: number
    },
<<<<<<< HEAD
    url: {
      type: String,
      default: imageURL // might need to be a link to S3 where the image is actually stored
    }
  });
};

const voterBadgeSchema = createBadgeSchema(1, 'voterBadge');
const VoterBadge = model('VoterBadge', voterBadgeSchema);

const mayorBadgeSchema = createBadgeSchema(5, 'mayorBadge');
const MayorBadge = model('MayorBadge', mayorBadgeSchema);

const sosBadgeSchema = createBadgeSchema(10, 'sosBadge');
const SosBadge = model('SosBadge', sosBadgeSchema);

const gubBadgeSchema = createBadgeSchema(25, 'gubBadge');
const GubBadge = model('GobBadge', gubBadgeSchema);

const veepBadgeSchema = createBadgeSchema(50, 'veepBadge');
const VeepBadge = model('VeepBadge', veepBadgeSchema)

const potusBadgeSchema = createBadgeSchema(100, 'potusBadge');
=======
    url: String
  });
};

const voterBadgeSchema = createBadgeSchema(1);
const VoterBadge = model('VoterBadge', voterBadgeSchema);

const mayorBadgeSchema = createBadgeSchema(5);
const MayorBadge = model('MayorBadge', mayorBadgeSchema);

const sosBadgeSchema = createBadgeSchema(10);
const SosBadge = model('SosBadge', sosBadgeSchema);

const gubBadgeSchema = createBadgeSchema(25);
const GubBadge = model('GobBadge', gubBadgeSchema);

const veepBadgeSchema = createBadgeSchema(50);
const VeepBadge = model('VeepBadge', veepBadgeSchema)

const potusBadgeSchema = createBadgeSchema(100);
>>>>>>> 670e1d0... [Feature] Add React file structure and components. Add Homepage navigation bar.
const PotusBadge = model('PotusBadge', potusBadgeSchema);

module.exports = {
  VoterBadge,
  MayorBadge,
  SosBadge,
  GubBadge,
  VeepBadge,
  PotusBadge
}

