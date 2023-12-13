const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskTitle: String,
    taskDescription: String,
    taskStatus: String,
    taskpriority: String
});

const task = mongoose.model('Task', taskSchema);

module.exports = task;