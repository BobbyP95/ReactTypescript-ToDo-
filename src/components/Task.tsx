import React from 'react'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {MdDelete} from 'react-icons/md'
import {AiFillEdit} from 'react-icons/ai'
import {BsCircle} from 'react-icons/bs'
import { Todo } from '../module/Todo';
import './task.css'
interface Props {
    task:Todo;
    complete:boolean;
    tasks:Todo[];
    setTasks:React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const Task = ({task,complete,setTasks,tasks}: Props) => {

    const handleComplete=(id:number)=>{
        
        setTasks(prev => prev.map((t)=> id === t.id? {...t, complete:!t.complete}: t) )
    }
    const handle=(id:number)=>{
        
        setTasks(prev => prev.filter(t=> t.id !== id ))
    }
    return (
        <div className="taskDiv" >
            <div className='todo'>
               {
                !complete?
                <><div><BsCircle className='icon'/></div> <span>{task.text}</span></> : 
                <><div><BsFillCheckCircleFill className='icon'/></div> <span className='line'>{task.text}</span></>
               }       
            </div>
            <div className='actions'>
                <div className='action'>
                    <BsFillCheckCircleFill onClick={()=>handleComplete(task.id)}  className='icon'/>
                    <h4>Complete</h4>
                </div>
                <div className='action'>
                    <AiFillEdit className='icon'/>
                    <h4>Edit</h4>
                </div>
                <div className='action'>
                    <MdDelete  className='icon' onClick={()=>handle(task.id)} />
                    <h4>Delete</h4>
                </div>
            </div>
            
        </div>
    )
}
