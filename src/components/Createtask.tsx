import { Button,  TextField } from "@mui/material"
import  {  useState } from "react"
import { useTaskcontext } from "../context/Taskcontext";
import styled from "styled-components";

const Createtask = () => {
  const[addtask,setAddtask]=useState("");
  const{addTask}=useTaskcontext();
  function handleaddtask(){
       if(addtask)
       {
          addTask(addtask);
          console.log("tt");
       }
   }
   console.log(addtask);

  return (
    <ParentDiv>
        <TextField fullWidth label="AddTask" id="fullWidth" onChange={(e)=>setAddtask(e.target.value)}/>
        <Button onClick={handleaddtask} variant="contained" color="primary">Add</Button>
    </ParentDiv>
  )
}

export default Createtask;


const ParentDiv = styled.div`
display:flex;
padding:70px;
`