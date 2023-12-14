const router = require('express').Router();
const {
  getAll, getFromCollection, getById,
} = require('../controllers/me');

router.get('/api/all', getAll);
router.get('/api/:collection/object/:id', getById);
router.get('/api/:collection/page/:page-:range', getFromCollection);

module.exports = router;
