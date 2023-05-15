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
    
   
  }
 


  return (
    <>
      <EntryPoint task={task} setTask={setTask} handleSubmit={addTask}/>
    :<TaksList display={display} setDisplay={setDisplay} setTasks={setTasks} tasks={tasks}/>
        </>
  );
}

export default App;
