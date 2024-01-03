import React, { useState, useEffect } from 'react';
import './styles/task-editor.css';

const TaskEditor = ({ selectedTask, updateTask, onRemoveTask }) => {
    const [editedTask, setEditedTask] = useState(null);

    useEffect(() => {
      if (selectedTask) {
          setEditedTask(selectedTask);
      } else {
          setEditedTask({
              title: '',
              description: '',
              taskStatus: 'Incomplete',
              priority: 'low'
          });
      }
  }, [selectedTask]);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      const currentDate = new Date().toLocaleString();
      setEditedTask({
        ...editedTask,
        [name]: value,
        date:currentDate
      });
    };
;
   
  return (
    <div className="task-editor-container">
      <h1>Task Editor</h1>
      {selectedTask ? ( //if the selectedTask is not empty then the following template will be displayed
        <div className="editor-form">
          <label>
            Task Name:
            <input
              type="text"
              name="title"
              value={editedTask.title}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Task Description:
            <input
              type="text"
              name="description"
              value={editedTask.description}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Task Status:
            <select
              name="taskStatus"
              value={editedTask.taskStatus}
              onChange={handleInputChange}
            >
              <option value="Incomplete">Incomplete</option>
              <option value="Pending">Pending</option>
              <option value="Complete">Complete</option>
            </select>
          </label>
          <label>
            Priority:
            <select
              name="priority"
              value={editedTask.priority}
              onChange={handleInputChange}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
          <button onClick={()=>updateTask(editedTask)}>Update Task</button>
          <button onClick={()=>onRemoveTask(editedTask.taskNo)}>Remove Task</button>
        </div>
      ) : ( //Else the following template will be displayed
        <p>No task selected for editing</p>
      )}
    </div>
  );
};

export default TaskEditor;
