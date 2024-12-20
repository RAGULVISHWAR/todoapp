import Createtask from "./components/Createtask"
import { useTaskcontext } from "./context/Taskcontext";


function App() {
  const{tasks}=useTaskcontext();
  return (
    <>
     <Createtask />
     {tasks.map((task)=>{
      return(<p>{task.name}</p>)
     })}
    </>
  )
}

export default App
