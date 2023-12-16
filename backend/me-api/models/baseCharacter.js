const mongoose = require('mongoose');

const baseCharacterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  race: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  birth: {
    type: Object,
    required: false,
  },
  death: {
    type: Array,
    required: false,
  },
  homePlanet: {
    type: String,
    required: false,
  },
  appearence: {
    type: String,
    required: true,
  },
  nativeLanguge: {
    type: String,
    required: true,
  },
  organisation: {
    type: String,
    required: false,
  },
  kindeOfActivity: {
    type: String,
    required: false,
  },
  rank: {
    type: String,
    required: false,
  },
  biotic: {
    type: String,
    required: false,
  },
  voiceActor: {
    type: String,
    required: true,
  },
}, { versionKey: false });

const baseCharacterModel = mongoose.model('baseCharacter', baseCharacterSchema);

module.exports = {
  baseCharacterModel,
  baseCharacterSchema,
};
