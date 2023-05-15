import React, {FormEvent, useState} from 'react';
import './App.css';
import { EntryPoint } from './components/EntryPoint';
import { Todo } from './module/Todo';
import { TaksList } from './components/TaksList';
function App() {
  const [task, setTask] = useState<string>('')
  const [tasks, setTasks] = useState<Todo[]>([])
  
  const addTask = (e:FormEvent)=>{
    e.preventDefault()
    if (task === ""){
      return
    }
    setTasks (prev => [...prev, {id: Math.floor(Math.random()*200), text:task, complete:false}] )
    
    setTask('')
  }


  console.log(tasks)
  return (
    <>
      <EntryPoint task={task} setTask={setTask} handleSubmit={addTask}/>
      {tasks.length === 0? <h3>No tasks available</h3> :<TaksList setTasks={setTasks} tasks={tasks}/>}
      
    </>
  );
}

export default App;
