const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');

router.get('/', controller.defaultController);
router.post('/todoApp', controller.todoApp)

module.exports = router; 