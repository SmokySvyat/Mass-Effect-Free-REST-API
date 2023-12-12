const router = require('express').Router();
const {
  getAll, getPlanets, getRaces, getPlanetById, getRaceById,
} = require('../controllers/me');

router.get('/api/all', getAll);
router.get('/api/planets/all', getPlanets);
router.get('/api/planets/:page-:range', getPlanets);
router.get('/api/planets/:id', getPlanetById);
router.get('/api/races/all', getRaces);
router.get('/api/races/:page-:range', getRaces);
router.get('/api/races/:id', getRaceById);

module.exports = router;
