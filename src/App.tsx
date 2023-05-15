import React, {FormEvent, useState} from 'react';
import './App.css';
import { EntryPoint } from './components/EntryPoint';
import { Todo } from './module/Todo';
import { TaksList } from './components/TaksList';
// import { Filter } from './components/FIlter';

function App() {
  const [task, setTask] = useState<string>('')
  const [tasks, setTasks] = useState<Todo[]>([])
  const [display,setDisplay] = useState<Todo[]>([])
  
  const addTask = (e:FormEvent)=>{
    e.preventDefault()
    if (task === ""){
      return
    }
    setTasks (prev => [...prev, {id: Math.floor(Math.random()*200), text:task, complete:false}] )
    
    setTask('')
    // setDisplay(prev => prev =tasks)
   
  }
 
  // 

  // const all =()=>{
  //   setDisplay(tasks) 
  // } 
  // const uncomp =()=>{
  //   setDisplay(tasks.filter(t=>t.complete === false)) 
  // } 
  // const comp =()=>{
  //   setDisplay(tasks.filter(t=>t.complete === true)) 

  // } 
  // const ongoing = tasks.filter(t=>t.complete === true)




  return (
    <>
      <EntryPoint task={task} setTask={setTask} handleSubmit={addTask}/>
    :<TaksList display={display} setDisplay={setDisplay} setTasks={setTasks} tasks={tasks}/>
      {/* <Filter all={all} comp={comp} uncomp={uncomp}/> */}
    </>
  );
}

export default App;
