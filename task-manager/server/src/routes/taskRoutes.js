const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskControllers');

//Define API end points
const postRoute = router.post('/addedTasks',taskController.POST);
const getRoute = router.get('/taskList', taskController.GET)

module.exports = [postRoute, getRoute];