const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');
const validation = require('../middleware/validate');


router.get('/', usersController.getAll);

router.get('/:id', usersController.getSingle);

router.post('/', validation.saveUsers, usersController.createUser);

router.put('/:id',validation.saveUsers, usersController.updateUser);

router.delete('/:id', usersController.deleteUser);
module.exports = router;