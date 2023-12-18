const { Schema, model, ObjectId } = require('mongoose');
const validator = require('validator');

const contactSchema = new Schema({
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
    minlength: 8,
    required: true,
    select: false,
  },
  phone: {
    type: String,
    unique: true,
    minlength: 10,
    required: true,
    validate: {
      validator: (v) => validator.isDecimal(v),
      message: 'Некорректный номер',
    },
  },
  parent: { type: ObjectId },
}, { versionKey: false, timestamps: true });

const contactModel = model('Contact', contactSchema);
module.exports = {
  contactModel,
  contactSchema,
};
