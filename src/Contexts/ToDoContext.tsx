import { createContext, useState }  from "react";


const ToDoContext = createContext();

const ToDoProvider = ({children}) => {
  
  
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [btnUpdate, setBtnUpdate] = useState(true);
  const [ID, setID] = useState(null);
  
  const allState = {input, setInput, tasks, setTasks, btnUpdate, setBtnUpdate, ID, setID};
  
  return (
    
    <ToDoContext.Provider value={allState}>
    {children}
    </ToDoContext.Provider>
    
    )
}


export { ToDoContext, ToDoProvider };