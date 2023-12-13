const Task = require('.../models/taskModels');

exports.createTask = async (req, res) => {
    try{
        const{taskTitle, taskDescription, taskStatus, taskPriority}=req.body;

        const newTask = new Task ({
            taskTitle,
            taskDescription,
            taskStatus,
            taskPriority
        });
        const savedTask = await newTask.save();
        res.json(savedTask);
        }catch(error){
            res.status(500).json({message: error.emssage});
    }

};