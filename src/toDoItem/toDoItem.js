import React from 'react';
import { useState } from 'react';

export default function ToDoItem({content, index, removeItem}) {
    let [ isChecked, handleInputChange ] = useState(false);

    return (
        <div className={`item ${isChecked ? 'doneTask' : ''}`}>
            <div className='task'>
                {/* <input id='taskStatus' type='checkbox' checked={isChecked} onChange={() => handleInputChange(!isChecked)}/>
                <label id='status' htmlFor="taskStatus"></label> */}

                <input className='checkbox' id={`taskStatus${index}`} type='checkbox' checked={isChecked} onChange={() => handleInputChange(!isChecked)}/>
                <label id='status' htmlFor={`taskStatus${index}`}></label>

                <p>{content}</p>
            </div>
            <button className='removeButton' onClick={() => removeItem(index)}></button>
        </div>
            
    )
}