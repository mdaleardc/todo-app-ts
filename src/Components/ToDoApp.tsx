import { useContext } from "react";
import ToDoList from "./ToDoList";
import taskImg from "../assets/task.jpeg"
import { ToDoContext } from "../Contexts/ToDoContext";



const ToDoApp = () => {
  
  const {input, setInput, tasks, btnUpdate, addTask, handleKeyPress, handleChange} = useContext(ToDoContext);
  
  
  
  
  return (
    <>
    <section className='flex flex-col sm:flex-row gap-x-[6px]'>
    <div className='w-[80%] ms:w-[50%] border-[2px] rounded-md h-fit mx-auto my-[1rem]'>
    <img src={taskImg} alt='task filler image' className='w-full h-[200px] rounded-md object-fill'/>
    </div>
    <div className='w-[80%] mx-auto my-[1rem] border-[2px] rounded-md'>
    <h1 className='text-black text-2xl font-semibold text-center py-[7px]'>TODO APP</h1>
    <div className='w-full mx-auto py-[5px] bg-[#0D2646] rounded-md'>
    <input type='text' placeholder='Enter your task' name='userInput' value={input} className='h-[2.5rem] outline-none text-md font-semibold rounded-sm pl-[5px] mx-auto my-[1rem] block w-[80%]' onChange={handleChange} onKeyDown={handleKeyPress}/>
    
    {
      btnUpdate ? <button className='bg-[#28e] rounded-md text-white block w-[80%] mx-auto text-2xl font-semibold py-[5px] text-center' onClick={addTask}>Add Task</button> : <button className='bg-[#28e] rounded-md text-white block w-[80%] mx-auto text-2xl font-semibold py-[5px] text-center' onClick={addTask}>Update Task</button>
    }
    
    </div>
    <div className={`${tasks.length>=1 ? "mt-[0.5rem]":""}`}>
    {
    tasks.length >= 1 ? <ToDoList /> : ""
    }
    </div>
    </div>
    
    </section>
    </>
    )
}

export default ToDoApp;