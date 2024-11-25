import { createContext, useState, useEffect }  from "react";
import { v4 as uuidv4 } from 'uuid';


const ToDoContext = createContext();

const getLocalStorageData = () => {
  const getLocalData = localStorage.getItem("localData");
  return getLocalData ? JSON.parse(localStorage.getItem("localData")) : [];
}


const ToDoProvider = ({children}) => {
  
  
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState(getLocalStorageData());
  const [btnUpdate, setBtnUpdate] = useState(true);
  const [ID, setID] = useState(null);
  
  //Store data local storage
   useEffect(()=> {
     localStorage.setItem("localData", JSON.stringify(tasks))
   }, [tasks])
  
  const handleChange = (e) => {
      setInput(e.target.value);
  }

  
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
    const allInputs = {id:uuidv4(), title:input, compelet:false};
    setTasks([...tasks, allInputs]);
    setInput("")
    }
  }
  
  const handleKeyPress = (e) => {
    if(e.key === "Enter") {
      addTask();
    }
  }
  
  
  // functions of ToDoList file
  
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

  
  
  
  const allState = {input, setInput, tasks, setTasks, btnUpdate, setBtnUpdate, ID, setID, addTask, handleKeyPress, handleChange, handleRemove, handleEdit, handleRemoveAll, handleCompelet};
  
  return (
    
    <ToDoContext.Provider value={allState}>
    {children}
    </ToDoContext.Provider>
    
    )
}


export { ToDoContext, ToDoProvider };