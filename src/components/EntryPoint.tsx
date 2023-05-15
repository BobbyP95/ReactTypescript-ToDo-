import React,{FormEvent, useState} from 'react';
import { TaksList } from './TaksList';
import './entryPoint.css'
interface Props {
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e:FormEvent)=> void;
}

export const EntryPoint = ({task,setTask,handleSubmit}: Props) => {

    return (
        <>
            <h1>Todo List</h1>

            <form action="" className="input_field" onSubmit={ handleSubmit}>
                <div className='input_div'>
                    <input 
                        type="text"
                        value= {task}
                        placeholder='Please enter task'
                        onChange={(e)=>setTask(e.target.value)}
                    />

                  
                </div>
                <div className='btn_div'>
                    <button  type='submit'>Add</button>
                </div>
                
            </form>
            
        </>
        
    )
}
