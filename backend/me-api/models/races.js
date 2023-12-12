const mongoose = require('mongoose');

const resRacesSchema = new mongoose.Schema({
  galery: [{}],
  ru: {},
  en: {},
});

module.exports = mongoose.model('Race', resRacesSchema);
