import React, { createContext, ReactNode, useState } from "react"
import { Task } from "../type/Task";

interface Tasks{
    tasks:Task[],
    addTask:(task:string)=>void,
    removeTask:(id:number)=>void,
}
export const Taskcontext =createContext<Tasks|undefined>(undefined); 

export const Taskprovider:React.FC<{children:ReactNode}> =({children}) =>{
  const[tasks,setTasks]=useState<Task[]>([]);
    function addTask(task:string){
       const newtask:Task ={id:Date.now(),name:task,complete:false};
       setTasks([...tasks,newtask]);
    }
    function removeTask(id:number){
      setTasks(tasks.filter((task)=> task.id!==id))
    }
    return (
      <Taskcontext.Provider value={{tasks,addTask,removeTask}}>
        {children} 
      </Taskcontext.Provider>
    )
  }
  export const useTaskcontext = ():Tasks => {
    const context = React.useContext(Taskcontext);
    if (!context) {
      throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
  };