import { useTaskcontext } from "../context/Taskcontext";

const Showtask = () => {
    const{tasks}=useTaskcontext();
  return (
    <div style={{display:"flex"}}>
       <ul>
        
       </ul>
    </div>
  )
}

export default Showtask