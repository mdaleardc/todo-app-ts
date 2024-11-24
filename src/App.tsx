import ToDoApp from "./Components/ToDoApp";
import { ToDoProvider } from "./Contexts/ToDoContext";


const App = () => {



  return (
    <>
      <div className="h-[100vh] bg-blue-200">
      <ToDoProvider>
      <ToDoApp />
      </ToDoProvider>
      </div>
    </>
  )
}

export default App
