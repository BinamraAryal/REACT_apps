import React from 'react';
import './styles.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskEditor from './components/TaskEditor';
import useTaskData from './hooks/useTaskData';
const App=()=>{

  const{tasks, selectedTask, addTask, updateTask, handleTaskClick, removeTask} = useTaskData();
    return(
        <div className="App">
            <TaskForm addTask={addTask}/>
            <TaskList tasks={tasks} onTaskClick={handleTaskClick}/>
            <TaskEditor taskToEdit={selectedTask} updateTask={updateTask} onRemoveTask={removeTask}/>
        </div>
    );
};
export default App;
