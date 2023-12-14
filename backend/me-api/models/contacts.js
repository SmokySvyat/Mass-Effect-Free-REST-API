const mongoose = require('mongoose');

const contactsSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const contactsModel = mongoose.model('contacts', contactsSchema);
module.exports = {
  contactsModel,
  contactsSchema,
};
