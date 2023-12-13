import React, { useState } from 'react';
import './styles/task-form.css';

const TaskForm = ({addTask}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [taskCounter, setCounter] = useState(1);
  const [taskStatus, setStatus] = useState('Incomplete'); // State for status dropdown
  const [priority, setPriority] = useState('Low'); // State for priority dropdown


  const handleSubmit=(e)=>{
    e.preventDefault();
    
    const newTask = {
        taskNo: taskCounter,
        title,
        description,
        taskStatus,
        priority
        
    };

    addTask(newTask);
    setTitle('');
    setDescription('');
    setCounter(taskCounter+1);
  };

  return (
    <div className="task-entry-container">
            <h1>Task Form</h1>
    <form>
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
      {/* Status Dropdown */}
      <select value={taskStatus} onChange={(e) => setStatus(e.target.value)}>
          <option value="Complete">Complete</option>
          <option value="Pending">Pending</option>
          <option value="Incomplete">Incomplete</option>
        </select>
        {/* Priority Dropdown */}
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      <button type="submit" onClick={handleSubmit}>Add Task</button>
    </form>
    </div>
  );
};

export default TaskForm;
