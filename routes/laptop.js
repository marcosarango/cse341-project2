
const express = require('express');
const laptopsController = require('../controllers/laptop')
//const validation = require('../middleware/validate')
const authenticate = require('../middleware/authenticate')

const router = express.Router()

router.get('/', laptopsController.getAll)
router.get('/:id', laptopsController.getSingle)
router.post(
  '/', authenticate.isAuthenticated, laptopsController.createLaptop);
  
router.put(
  '/:id', authenticate.isAuthenticated, laptopsController.updateLaptop);
router.delete(
  '/:id',
  authenticate.isAuthenticated, laptopsController.deleteLaptop);

module.exports = router;