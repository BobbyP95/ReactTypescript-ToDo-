import React,{useState,useEffect}from 'react'
import { Task } from './Task'
import { Todo } from '../module/Todo';
import './taskList.css'
interface Props {
    tasks:Todo[];
    setTasks: React.Dispatch<React.SetStateAction<Todo[]>>;
    display:Todo[];
    setDisplay: React.Dispatch<React.SetStateAction<Todo[]>>;
}



export const TaksList = ({display,tasks,setTasks,setDisplay}: Props) => {
    const [no,setNo]=useState<number>(0);

    // setDisplay(prev => prev =tasks)
    useEffect(() => {
        if(no === 0){
            setDisplay(prev => prev =tasks)
        }
        if(no === 2){
            setDisplay(prev => prev =tasks.filter(t=>t.complete === false))
        }
        if(no === 1){
            setDisplay(prev => prev =tasks.filter(t=>t.complete === true))
        }
    }, [no,tasks,setDisplay])
      
    
    return (
        <>
        <div className='tasks_list'>
            {display.length === 0? <h3>No available list</h3>:
            <h3>Current List</h3>}
            {display.map(task => <Task 
                task={task} 
                complete={task.complete}
                key={task.id}
                tasks={tasks}
                setTasks={setTasks}
            />  )}
        </div>
        <div className='filter_btn'>
            <div><button className='all_btn' onClick={()=>{setNo(0); console.log(no); }}>All</button></div>
            <div><button className='active_btn' onClick={()=>{setNo(2); console.log(no); }}>Active</button></div>
            <div><button className='comp_btn' onClick={()=>{setNo(1); console.log(no); }}>Complete</button></div>
        </div>
        </>
        
    )
}
