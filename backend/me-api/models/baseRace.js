const mongoose = require('mongoose');
const { articleSchema } = require('./article');

const baseRaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  appearence: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  homePlanet: {
    type: String,
    required: false,
  },
  lifetime: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: false,
  },
  government_authority: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  history: [articleSchema],
  biology: [articleSchema],
  culture: [articleSchema],
  government: [articleSchema],
  economy: [articleSchema],
}, { versionKey: false });

const baseRaceModel = mongoose.model('baseRace', baseRaceSchema);

module.exports = {
  baseRaceModel,
  baseRaceSchema,
};
