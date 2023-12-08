import React, {useState} from 'react';
import './styles.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskEditor from './components/TaskEditor';

const App=()=>{
    const[tasks,setTasks] = useState([]);
    const[selectedTask, setSelectedTask] = useState(null);

    //Function to add a task to the list
    const addTask = (newTask)=>{
        setTasks([...tasks, newTask]);
    };

    // Function to update a task
    const updateTask = (updatedTask) => {
        const updatedTasks = tasks.map((task) =>
          task.taskNo === updatedTask.taskNo ? updatedTask : task
        );
        setTasks(updatedTasks);
        setSelectedTask(null);
        
      };

    // Function to handle TaskList click event
    const handleTaskClick = (task)=>{
        setSelectedTask(task);
    };

     // Function to remove a task
  const removeTask = (taskNoToRemove) => {
    setTasks(prevTasks => prevTasks.filter(task => task.taskNo !== taskNoToRemove));
    setSelectedTask(null); // Clear the selected task after removal
  };

    return(
        <div className="App">
            <TaskForm addTask={addTask}/>
            <TaskList tasks={tasks} onTaskClick={handleTaskClick}/>
            <TaskEditor taskToEdit={selectedTask} updateTask={updateTask} onRemoveTask={removeTask}/>
        </div>
    );
};
export default App;
