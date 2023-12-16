const mongoose = require('mongoose');
const { baseCharacterSchema } = require('./baseCharacter');
const { contactsSchema } = require('./contacts');

const characterSchema = new mongoose.Schema({
  photo: String,
  ru: baseCharacterSchema,
  en: baseCharacterSchema,
  contacts: contactsSchema,
}, { versionKey: false });

const characterModel = mongoose.model('Character', characterSchema);

module.exports = {
  characterModel,
  characterSchema,
};
