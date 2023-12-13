import React from 'react';
import './styles/task-list.css';

const TaskList = ({ tasks, onTaskClick }) => {
    const handleTaskClick = (task)=>{
        onTaskClick(task);
    }
  return (
    <div className="task-list-container">
      <h1>Task List</h1>
      <table>
        <thead>
          <tr>
            <th>Task No</th>
            <th>Task Name</th>
            <th>Task Description</th>
            <th>Task Status</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.taskNo}</td>
              <td onClick={()=>handleTaskClick(task)}style={{cursor: 'pointer', color:'blue'}}>{task.title}
              </td>
              <td>{task.description}</td>
              <td>{task.taskStatus}</td>
              <td>{task.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
