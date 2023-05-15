import React,{useState} from 'react'
import { Task } from './Task'
import { Todo } from '../module/Todo';
interface Props {
    tasks:Todo[];
    setTasks: React.Dispatch<React.SetStateAction<Todo[]>>;
    
}



export const TaksList = ({tasks,setTasks}: Props) => {
    

    return (
        <div className='tasks_list'>
            {tasks.map(task => <Task 
                task={task} 
                complete={task.complete}
                key={task.id}
                tasks={tasks}
                setTasks={setTasks}
            />  )}
        </div>
    )
}
