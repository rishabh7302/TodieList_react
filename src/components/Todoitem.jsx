import React from 'react';

const Todoitem=(props)=>{
    return (
        <li className="todo-item">
            <span>
                <input type="checkbox"/>
                <span>{props.text}</span>
            </span>
            
            <p>...</p>
        </li>
    );
};
export default Todoitem;