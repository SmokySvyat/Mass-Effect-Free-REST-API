const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  systemName: {
    type: String,
    required: false,
  },
  links: {
    type: String,
    required: false,
  },
  episode: {
    type: String,
    required: false,
  },
  type: {
    type: Object,
    required: true,
  },
  codex: {
    type: String,
    required: false,
  },
  nameEn: {
    type: String,
    required: false,
  },
  descriptionEn: {
    type: String,
    required: false,
  },
  notesEn: {
    type: Object,
    required: false,
  },
  nameRu: {
    type: String,
    required: true,
  },
  descriptionRu: {
    type: String,
    required: true,
  },
  notesRu: {
    type: Object,
    required: false,
  },
}, { versionKey: false });

const Planet = mongoose.model('planets', planetSchema);
module.exports = Planet;
