const { STATUS_OK, ERROR_NOT_FOUND } = require('../utils/constants');

const { planetModel } = require('../models/planets');
const { raceModel } = require('../models/races');
const { characterModel } = require('../models/characters');

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

module.exports = {
  getAll,
  getFromCollection,
  getById,
};
