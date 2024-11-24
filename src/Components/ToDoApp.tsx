import { useContext } from "react";
import ToDoList from "./ToDoList";
import taskImg from "../assets/task.jpeg"
import { v4 as uuidv4 } from 'uuid';
import { ToDoContext } from "../Contexts/ToDoContext";


const ToDoApp = () => {
  
  const {input, setInput, tasks, setTasks, btnUpdate, setBtnUpdate, ID, setID} = useContext(ToDoContext);
  
  const handleChange = (e) => {
      setInput(e.target.value);
  }
  
  const allInputs = {id:uuidv4(), title:input, compelet:false};
  
  
  const addTask = () => {
    
    if(!input) {
      alert("Please add or update a valid task!");
    } else if(!btnUpdate) {
      setTasks(tasks.map((elem) => {
        if(elem.id === ID) {
          return {...elem, title:input}
        }
        return elem;
      }));
      setBtnUpdate(true);
      setInput("");
      setID(null);
      } else {
    setTasks([...tasks, allInputs]);
    setInput("")
    }
  }
  
  const handleKeyPress = (e) => {
    if(e.key === "Enter") {
      addTask();
    }
  }
  return (
    <>
    <section className='grid grid-rows-2 sm:grid-cols-2'>
    <div className='w-[80%] ms:w-[50%] border-[2px] rounded-md h-fit mx-auto my-[1rem]'>
    <img src={taskImg} alt='task filler image' className='w-full h-[200px] rounded-sm object-cover'/>
    </div>
    <div className='w-[80%] mx-auto my-[2rem] border-[3px] h-fit rounded-xl'>
    <h1 className='text-black text-2xl font-semibold'>TODO APP</h1>
    <div className='w-full mx-auto pt-[5px] bg-[#0D2646] rounded-md'>
    <input type='text' placeholder='Enter your task' name='userInput' value={input} className='h-[2.5rem] outline-none text-md font-semibold rounded-sm pl-[5px] mx-auto my-[1rem] block w-[80%]' onChange={handleChange} onKeyDown={handleKeyPress}/>
    
    {
      btnUpdate ? <button className='bg-[#28e] rounded-md text-white block w-[80%] mx-auto text-2xl font-semibold py-[5px] text-center' onClick={addTask}>Add Task</button> : <button className='bg-[#28e] rounded-md text-white block w-[80%] mx-auto text-2xl font-semibold py-[5px] text-center' onClick={addTask}>Update Task</button>
    }
    
    <ToDoList />
    
    </div>
    </div>
    </section>
    </>
    )
}

export default ToDoApp;