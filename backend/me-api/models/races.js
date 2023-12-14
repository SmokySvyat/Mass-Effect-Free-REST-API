const mongoose = require('mongoose');
const { baseRaceSchema } = require('./baseRace');

const raceSchema = new mongoose.Schema({
  galery: [String],
  ru: baseRaceSchema,
  en: baseRaceSchema,
});

const raceModel = mongoose.model('Race', raceSchema);
module.exports = {
  raceModel,
  raceSchema,
};
