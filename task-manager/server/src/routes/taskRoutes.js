const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskControllers');

//Define API end points
router.post('/tasks',taskController.createTask);

module.exports = router;