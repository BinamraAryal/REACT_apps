import {useState} from 'react';

const useTaskData = () =>{
  const[tasks,setTasks] = useState([]);
  const[selectedTask, setSelectedTask] = useState(null);

    //Function to add a task to the list
    const addTask = (newTask)=>{
      if(newTask.title === ''){
        console.log('Add task is clicked without adding any task title');
      }else{
        setTasks([...tasks, newTask]);
      }
        
    };

    // Function to handle TaskList click event
    const handleTaskClick = (task)=>{
        setSelectedTask(task);
    };

    // Function to update a task
    const updateTask = (updatedTask) => {
        const updatedTasks = tasks.map((task) =>
          task.taskNo === updatedTask.taskNo ? updatedTask : task
        );
        setTasks(updatedTasks);
        setSelectedTask(null);
        
      };

    // Function to remove a task
    const removeTask = (taskNoToRemove) => {
    setTasks(prevTasks => prevTasks.filter(task => task.taskNo !== taskNoToRemove));
    setSelectedTask(null); // Clear the selected task after removal
    };
  
  return{tasks, selectedTask, addTask, updateTask, handleTaskClick, removeTask}
};
export default useTaskData;