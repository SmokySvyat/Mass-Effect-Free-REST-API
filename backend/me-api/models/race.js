const mongoose = require('mongoose');

const raceSchema = new mongoose.Schema({
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
  history: [{ type: mongoose.Schema.ObjectId, ref: 'Article', required: false }],
  biology: [{ type: mongoose.Schema.ObjectId, ref: 'Article', required: false }],
  culture: [{ type: mongoose.Schema.ObjectId, ref: 'Article', required: false }],
  government: [{ type: mongoose.Schema.ObjectId, ref: 'Article', required: false }],
  economy: [{ type: mongoose.Schema.ObjectId, ref: 'Article', required: false }],
});

module.exports = mongoose.model('inRace', raceSchema);
