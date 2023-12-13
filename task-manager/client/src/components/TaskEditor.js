import React, { useState, useEffect } from 'react';
import './styles/task-editor.css';

const TaskEditor = ({ taskToEdit, updateTask, onRemoveTask }) => {
    const [editedTask, setEditedTask] = useState(null);

    useEffect(() => {
      if (taskToEdit) {
          setEditedTask(taskToEdit);
      } else {
          setEditedTask({
              title: '',
              description: '',
              taskStatus: 'Incomplete',
              priority: 'low'
          });
      }
  }, [taskToEdit]);
  
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedTask({
        ...editedTask,
        [name]: value,
        });
    };

    const handleUpdate = () => {
        console.log("Updated Task:", editedTask);
        updateTask(editedTask);// Send the editedTask back directly to App.js
    };

    const handleRemoveTask = ()=>{
      if (editedTask && editedTask.taskNo) {
        onRemoveTask(editedTask.taskNo); // Pass the taskNo to the parent component for removal
      }

      
    };

  return (
    <div className="task-editor-container">
      <h1>Task Editor</h1>
      {taskToEdit ? (
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
          <button onClick={handleUpdate}>Update Task</button>
          <button onClick={handleRemoveTask}>Remove Task</button>
        </div>
      ) : (
        <p>No task selected for editing</p>
      )}
    </div>
  );
};

export default TaskEditor;
