import React, { useState } from 'react';
import './styles/task-form.css';

const TaskForm = ({addTask}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [taskCounter, setCounter] = useState(1);

  const handleSubmit=(e)=>{
    e.preventDefault();
    
    const newTask = {
        taskNo: taskCounter,
        title,
        description,
        taskStatus: 'Incomplete', //default status
        priority:'low'//default priority
        
    };

    addTask(newTask);
    setTitle('');
    setDescription('');
    setCounter(taskCounter+1);
  };

  return (
    <div className="task-entry-container">
            <h1>Task Form</h1>
    <form onSubmit={handleSubmit}> {/*onSubmit handler*/}
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
    </div>
  );
};

export default TaskForm;
