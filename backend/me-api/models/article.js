const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  article: {
    type: String,
    required: true,
  },
}, { versionKey: false });

const articleModel = mongoose.model('Article', articleSchema);
module.exports = {
  articleModel,
  articleSchema,
};
