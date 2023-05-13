import React from 'react';
import { Task } from './Task';
interface Props {
    
}

export const EntryPoint = (props: Props) => {
    return (
        <form action="" className="input_field">
            <input type="text" />
            <button type='submit'>Add</button>
        </form>
    )
}
