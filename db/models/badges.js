const { Schema, model } = require('mongoose');


const createBadgeSchema = (number) => {
  return new Schema({
    _id: {
      required: true,
      type: Number,
      default: number
    },
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
const PotusBadge = model('PotusBadge', potusBadgeSchema);

module.exports = {
  VoterBadge,
  MayorBadge,
  SosBadge,
  GubBadge,
  VeepBadge,
  PotusBadge
}

