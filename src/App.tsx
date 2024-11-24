import ToDoApp from "./Components/ToDoApp";
import { ToDoProvider } from "./Contexts/ToDoContext";


const App = () => {



  return (
    <>
      <div className="text-center">
      <ToDoProvider>
      <ToDoApp />
      </ToDoProvider>
      </div>
    </>
  )
}

export default App
