import { Button,  TextField } from "@mui/material"
import  {  useState } from "react"
import { useTaskcontext } from "../context/Taskcontext";

const Createtask = () => {
  const[addtask,setAddtask]=useState("");
  const{addTask}=useTaskcontext();
  function handleaddtask(){
       if(addtask)
       {
          addTask(addtask);
          alert(`Task added`);
          setAddtask("");
       }
   }
   console.log(addtask);

  return (
    <div style={{display:"flex"}}>
        <TextField fullWidth label="AddTask" id="fullWidth" value={addtask} onChange={(e)=>setAddtask(e.target.value)}/>
        <Button onClick={handleaddtask} variant="contained" color="primary">Add</Button>
    </div>
  )
}

export default Createtask;
