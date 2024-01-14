const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskTitle: String,
    taskDescription: String,
    taskStatus: String,
    taskpriority: String,
    date: String
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;