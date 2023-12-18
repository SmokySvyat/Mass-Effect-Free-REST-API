const bcrypt = require('bcrypt');
const { ValidationError, CastError } = require('mongoose').Error;
const {
  CREATED, STATUS_OK, ERROR_NOT_FOUND, ERROR_CODE_UNIQUE, SALT_ROUNDS,
} = require('../utils/constants');

const NotUnique = require('../utils/errors/NotUnique');
const BadRequest = require('../utils/errors/BadRequest');
const NotFound = require('../utils/errors/NotFound');

const { planetModel } = require('../models/planets');
const { raceModel } = require('../models/races');
const { characterModel } = require('../models/characters');
const { contactModel } = require('../models/contacts');

const pagination = (arr, reqPage, reqRange) => {
  const page = Number(reqPage);
  const range = Number(reqRange);
  const totalPages = Math.ceil(arr.length / range);
  const firstIndex = (page - 1) * range;
  const lastIndex = firstIndex + range;
  const array = arr.slice(firstIndex, lastIndex);
  if (page > totalPages || page < 1) {
    return ({
      message: ERROR_NOT_FOUND,
    });
  }
  return (
    {
      total: arr.length,
      total_pages: totalPages,
      per_page: range,
      page_now: page,
      data: array,
    }
  );
};

const sendCollection = (responseData, req) => {
  if (req.params.page !== '0') {
    return pagination(responseData, req.params.page, req.params.range);
  }
  return responseData;
};

const getAll = async (req, res, next) => {
  const collectionsAll = [];
  await planetModel.find()
    .then((planets) => { collectionsAll.push(...planets); });
  await raceModel.find()
    .then((races) => { collectionsAll.push(...races); });
  await characterModel.find()
    .then((characters) => {
      collectionsAll.push(...characters);
      res
        .status(STATUS_OK)
        .send(collectionsAll);
    })
    .catch(next);
};

const getFromCollection = (req, res, next) => {
  // console.log(req.params);
  const { collection } = req.params;
  switch (collection) {
    case 'planets':
      planetModel.find()
        .then((planet) => {
          res
            .status(STATUS_OK)
            .send(sendCollection(planet, req));
        })
        .catch(next);
      break;
    case 'races':
      raceModel.find()
        .then((races) => {
          res
            .status(STATUS_OK)
            .send(sendCollection(races, req));
        })
        .catch(next);
      break;
    case 'characters':
      characterModel.find()
        .then((characters) => {
          res
            .status(STATUS_OK)
            .send(sendCollection(characters, req));
        })
        .catch(next);
      break;
    default:
      break;
  }
};

const getById = (req, res, next) => {
  const { collection, id } = req.params;
  switch (collection) {
    case 'planets':
      planetModel.findById(id)
        .then((planet) => res.status(STATUS_OK).send(planet))
        .catch(next);
      break;
    case 'races':
      raceModel.findById(id)
        .then((race) => res.status(STATUS_OK).send(race))
        .catch(next);
      break;
    case 'characters':
      characterModel.findById(id)
        .then((character) => res.status(STATUS_OK).send(character))
        .catch(next);
      break;
    default:
      break;
  }
};

const getContacts = (req, res, next) => {
  const { id } = req.params;
  if (id === 'all') {
    contactModel.find()
      .then((contacts) => {
        const safetyContact = [];

        contacts.forEach((contact) => {
          safetyContact.push({
            id: contact.id,
            email: contact.email,
            phone: contact.phone,
            createdAt: contact.createdAt,
            updatedAt: contact.updatedAt,
            parent: contact.parent,
          });
        });

        res.status(STATUS_OK).send(safetyContact);
      })
      .catch((err) => next(err));
  } else {
    contactModel.findById(id)
    // eslint-disable-next-line consistent-return
      .then((contact) => {
        if (!contact) {
          return next(new NotFound('Указанный контакт не найден.'));
        }
        const safetyContact = {
          id: contact.id,
          email: contact.email,
          phone: contact.phone,
        };
        res.status(STATUS_OK).send(safetyContact);
      })
      .catch(next);
  }
};

const createContact = async (req, res, next) => {
  const {
    email, password, phone, parent,
  } = req.body;

  await bcrypt.hash(password, Number(SALT_ROUNDS))
    .then((hash) => {
      contactModel.create({
        email,
        password: hash,
        phone,
        parent,
      })
        .then(() => {
          res
            .status(CREATED)
            .send({ email });
        })
        .catch((err) => {
          if (err.code === ERROR_CODE_UNIQUE && !err.keyPattern.email === false) {
            next(new NotUnique('Пользователь с такой почтой уже зарегистрирован'));
          } else if (err.code === ERROR_CODE_UNIQUE && !err.keyPattern.phone === false) {
            next(new NotUnique('Пользователь с таким номером уже зарегистрирован'));
          } else if (err instanceof ValidationError) {
            next(new BadRequest(`Переданы некорректные данные: ${err.message}`));
          } else {
            next(err);
          }
        });
    })
    .catch((err) => { throw err; });
};

// eslint-disable-next-line consistent-return
const updateContact = async (req, res, next) => {
  const { id } = req.params;
  const { email, phone } = req.body;
  try {
    const existingUserByEmail = await contactModel.findOne({ email });
    const existingUserByPhone = await contactModel.findOne({ phone });

    if (existingUserByEmail && existingUserByEmail._id !== id) {
      return next(new NotUnique('Пользователь с таким email уже зарегистрирован'));
    }
    if (existingUserByPhone && existingUserByPhone._id !== id) {
      return next(new NotUnique('Пользователь с таким phone уже зарегистрирован'));
    }

    const updatedContact = await contactModel.findByIdAndUpdate(
      id,
      { email, phone },
      { new: true, runValidators: true },
    );

    if (!updatedContact) {
      return next(new NotFound('Указанный контакт не найден.'));
    }

    res.status(STATUS_OK).send({
      email,
      phone,
      updatedAt: updatedContact.updatedAt,
    });

    // console.log(updatedContact);
  } catch (err) {
    if (err instanceof ValidationError || err instanceof CastError) {
      next(new BadRequest(`Переданы некорректные данные: ${err.message}`));
    } else {
      throw err;
    }
  }
};

// eslint-disable-next-line consistent-return
const deleteContact = async (req, res, next) => {
  const { id } = req.params;

  try {
    const contact = await contactModel.findById(id);
    if (!contact) {
      return next(new NotFound('Контакт с указанным id не найден.'));
    }
    contactModel.deleteOne({ _id: id })
      .then(res.status(STATUS_OK).send({ message: 'Контакт удалён.' }));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  getFromCollection,
  getById,
  getContacts,
  createContact,
  updateContact,
  deleteContact,
};
