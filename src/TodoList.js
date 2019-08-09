import React, { useState } from 'react';
import deleteButton from './icons/deleteButton.png'

const TodoList = ({todos, deleteTodo}) => {
    const [isCompleted, toggleCheck] = React.useState(false)
    return (
        <div>
            {todos.map((todo, index) => (
                <div style={{display: 'flex', width: '300px', marginTop: '20px'}}>
                    <input type='checkbox' onChange={() => toggleCheck(!isCompleted)} />
                    <div style={{marginLeft: '30px', textDecoration: isCompleted ? 'line-through' : ''}}>{ todo }</div>
                    <img style={{marginLeft: '30px', width: '20px', height: '20px'}} src={deleteButton} alt='deleteButton' onClick={() => {
                        deleteTodo(index);
                    }} />
                </div>
            ))}
        </div>
    )
    
}

export default TodoList;