import { useContext } from "react"
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ToDoContext } from "../Contexts/ToDoContext";


const ToDoList = () => {
  
    const {input, setInput, tasks, setTasks, btnUpdate, setBtnUpdate, ID, setID} = useContext(ToDoContext);
  
  const handleRemove = (indexToRemove) => {
  const isConfirm = window.confirm("Are you sure to remove it?");
  if(isConfirm) {
  const filteredItem = tasks.filter((item) =>
     item.id !== indexToRemove) 
    setTasks(filteredItem);
  }
    }; 
    
  const handleEdit = (itemToEdit) => {
    const foundTask = tasks.find((fItem) => fItem.id === itemToEdit);
    setInput(foundTask.title);
    setBtnUpdate(false);
    setID(itemToEdit);
  }
  
  const handleRemoveAll = () => {
    const isConfirm =window.confirm("Are you sure to delete All tasks?");
    if(isConfirm) {
    setTasks([]);
    }
  }
  
  const handleCompelet = (comId) => {
    setTasks(tasks.map((taskCom) => {
      if(taskCom.id === comId) {
        return {...taskCom, compelet: !taskCom.compelet}
      }
      return taskCom;
    }))
  }
  
  return (
    <>
    
    <div className='mx-auto py-[6px] bg-[#0D2646] rounded-md'>
    
    {
      tasks.map((task) =>{
        return (
         <div className='flex gap-[7px] justify-center items-center border-b-[1px] w-[96%] mx-auto' key={task.id}>
    <input type="checkbox" className='w-[25px] h-[25px]' onClick={()=>handleCompelet(task.id)}/>
    <div className={`text-md text-[orange] text-left h-[2.5rem] pl-[5px] pt-[8px] rounded-sm w-[70%] ${task.compelet?"line-through" : ""}`}>{task.title}</div>
    <FaEdit size='30' className='text-[#fff]  cursor-pointer' onClick={()=>handleEdit(task.id)}/>
    <MdDelete size='30'  className='text-[#fff] cursor-pointer' onClick={()=>handleRemove(task.id)}/>
    </div>
        )
      })
    }
    {
    tasks.length >= 2 ?  <div className='px-[7px] text-left'>
    <button className='w-fit h-[2.5rem] rounded-md text-left bg-[#f23] p-[7px] text-[#fff] text-xl my-[5px]' onClick={handleRemoveAll}>Remove All</button>
    </div> : ""
    }
    </div>
    </>
    )
}


export default ToDoList;