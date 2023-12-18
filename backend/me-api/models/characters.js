const mongoose = require('mongoose');
const { baseCharacterSchema } = require('./baseCharacter');
const { contactSchema } = require('./contacts');

const characterSchema = new mongoose.Schema({
  photo: String,
  ru: baseCharacterSchema,
  en: baseCharacterSchema,
  contacts: contactSchema,
}, { versionKey: false });

const characterModel = mongoose.model('Character', characterSchema);

module.exports = {
  characterModel,
  characterSchema,
};
