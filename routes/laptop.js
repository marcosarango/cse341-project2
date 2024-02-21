
const express = require('express');
const laptopsController = require('../controllers/laptop')
const validation = require('../middleware/validate')
const authenticate = require('../middleware/authenticate')

const router = express.Router()

router.get('/', laptopsController.getAll)
router.get('/:id', laptopsController.getSingle)
router.post(
  '/', authenticate.isAuthenticated, validation.saveLaptop, laptopsController.createLaptop);
  
router.put(
  '/:id', authenticate.isAuthenticated, validation.saveLaptop, laptopsController.updateLaptop);
router.delete(
  '/:id',
  authenticate.isAuthenticated, laptopsController.deleteLaptop);

module.exports = router;