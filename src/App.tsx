import Createtask from "./components/Createtask"
import Showtask from "./components/Showtask";
import { useTaskcontext } from "./context/Taskcontext";


function App() {
  const{tasks}=useTaskcontext();
  return (
    <>
     <Createtask />
     <Showtask/>
    </>
  )
}

export default App
