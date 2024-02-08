const express = require('express');
const getInstructorsController = require('../controllers/instructors')
//const validation = require('../middleware/validate')
const authenticate = require('../middleware/authenticate')

const router = express.Router()

router.get('/', getInstructorsController.getAllInstructors)
router.get('/:id', getInstructorsController.getInstructor)
router.post(
  '/', authenticate.isAuthenticated, getInstructorsController.postInstructor);
  
router.put(
  '/:id', authenticate.isAuthenticated, getInstructorsController.putInstructor);
router.delete(
  '/:id',
  authenticate.isAuthenticated, getInstructorsController.deleteInstructor);

module.exports = router;