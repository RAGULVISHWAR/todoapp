import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Switch } from "@mui/material";
import { useTaskcontext } from "../context/Taskcontext";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Showtask = () => {
    const{tasks}=useTaskcontext();
    function handleChange(id:number)
    {

    }
  return (
    <div style={{display:"flex"}}>
       <div>
        {tasks.map((task)=>
         <Accordion defaultExpanded>
         <AccordionSummary
           expandIcon={<ExpandMoreIcon />}
           aria-controls="panel3-content"
           id="panel3-header"
         >
           Task
         </AccordionSummary>
         <AccordionDetails>
           {task.name}
         </AccordionDetails>
         <AccordionActions>
           <Button>Cancel</Button>
           <Switch
              checked={task.complete}
              onChange={()=>handleChange(task.id)}
              inputProps={{ 'aria-label': 'controlled' }}
           />
         </AccordionActions>
       </Accordion>
        )}
       </div>
    </div>
  )
}

export default Showtask