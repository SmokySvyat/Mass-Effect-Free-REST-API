const mongoose = require('mongoose');

const galerySchema = new mongoose.Schema({
  imgUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Galery', galerySchema);
