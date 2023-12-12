const { STATUS_OK, ERROR_NOT_FOUND } = require('../utils/constants');
const Planets = require('../models/planets');
const Races = require('../models/races');

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

const sendResponse = (responseData, req) => {
  if (req.params.page !== undefined) {
    return pagination(responseData, req.params.page, req.params.range);
  }
  return responseData;
};

const getAll = (res, req, next) => {};

const getPlanets = (req, res, next) => {
  Planets.find()
    .then((planet) => {
      res
        .status(STATUS_OK)
        .send(sendResponse(planet, req));
    })
    .catch(next);
};

const getRaces = (req, res, next) => {
  Races.find()
    .then((races) => {
      res
        .status(STATUS_OK)
        .send(sendResponse(races, req));
    })
    .catch(next);
};

const getPlanetById = (req, res, next) => {
  const { id } = req.params;
  Planets.findById(id)
    .then((planet) => res.send(planet))
    .catch(next);
};

const getRaceById = (req, res, next) => {
  const { id } = req.params;
  Races.findById(id)
    .then((race) => res.send(race))
    .catch(next);
};

module.exports = {
  getAll,
  getPlanets,
  getRaces,
  getPlanetById,
  getRaceById,
};
