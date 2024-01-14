const Task = require('../models/taskModels');

const POST = async (req, res) => {
    try{
        const{taskTitle, taskDescription, taskStatus, taskPriority,date}=req.body;

        const newTask = new Task ({
            taskTitle,
            taskDescription,
            taskStatus,
            taskPriority,
            date
        });
        const savedTask = await newTask.save();
        res.json(savedTask);
        }catch(error){
            res.status(500).json({message: error.emssage});
    }

};
const GET = async (req, res) => {
    try{
        const savedTask = await Task.find();
        res.json(savedTask);
    } catch (err){
        res.status(500).json({message: err.message});
    }
};

module.exports = {POST, GET};