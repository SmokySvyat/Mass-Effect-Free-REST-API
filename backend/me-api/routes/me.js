const router = require('express').Router();
const {
  getAll, getFromCollection, getById, getContacts, createContact, updateContact, deleteContact,
} = require('../controllers/me');

router.get('/api/all', getAll);
router.get('/api/:collection/object/:id', getById);
router.get('/api/:collection/page/:page-:range', getFromCollection);

router.get('/api/contacts/:id', getContacts);
router.post('/api/contacts/new', createContact);
router.patch('/api/contacts/:id', updateContact);
router.delete('/api/contacts/:id/delete', deleteContact);

module.exports = router;
