import {useState} from 'react';

const useTaskData = () =>{
  const[tasks,setTasks] = useState([]);
  const[selectedTask, setSelectedTask] = useState(null);

    //Function to add a task to the list
    const addTask = async (newTask) => {
      if (newTask.title === '') {
        console.log('Add task is clicked without adding any task title');
      } else {
          try{
            const response = await fetch('https://localhost:5001/api/tasks',{
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(newTask),
            });

            if (response.ok){
              const savedTask = await response.json();
              setTasks([...tasks, savedTask]);
            }else{
              console.log("Failed to add task");
            }

          }catch(error){
            console.log('Error saving task: ', error);
          }
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