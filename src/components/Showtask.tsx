import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Switch, Typography } from "@mui/material";
import { useTaskcontext } from "../context/Taskcontext";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Showtask = () => {
    const{tasks,editComplete,removeTask}=useTaskcontext();
   
  return (
    <div>
       <div>
        {tasks.map((task)=>
         <Accordion >
         <AccordionSummary
           expandIcon={<ExpandMoreIcon />}
           aria-controls="panel3-content"
           id="panel3-header"
         >
           <Typography  variant="h5">Task</Typography>
         </AccordionSummary>
         <AccordionDetails>
           {task.name}
         </AccordionDetails>
         <AccordionActions>
         
           <Button disabled={!task.complete} variant="contained" onClick={()=>removeTask(task.id)}>Remove Task</Button>
           <Switch
              checked={task.complete}
              onChange={()=> editComplete(task.id)}
              inputProps={{ 'aria-label': 'controlled' }}
           /><span>{!task.complete?<p>not completed</p>:<p>completed</p>}</span>
         </AccordionActions>
       </Accordion>
        )}
       </div>
    </div>
  )
}

export default Showtask