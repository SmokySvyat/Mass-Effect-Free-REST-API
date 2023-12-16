const { Schema, model } = require('mongoose');
const validator = require('validator');

const contactsSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (v) => validator.isEmail(v),
      message: 'Некорректный email',
    },
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (v) => validator.isDecimal(v),
      message: 'Некорректный номер',
    },
  },
}, { versionKey: false });

const contactModel = model('Contact', contactsSchema);
module.exports = {
  contactModel,
  contactsSchema,
};
