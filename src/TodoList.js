import React from 'react';
import deleteButton from './icons/deleteButton.png'

const TodoList = ({todos, deleteTodo}) => (
    <div>
        {todos.map((todo, index) => (
            <div style={{display: 'flex', width: '200px', marginTop: '20px'}}>
                <input type='checkbox' onChange={() => {console.log(todo)}} />
                <div style={{marginLeft: '30px', textDecoration: 'line-through'}}>{ todo }</div>
                <img style={{marginLeft: '30px', width: '20px', height: '20px'}} src={deleteButton} alt='deleteButton' onClick={() => {
                    deleteTodo(index);
                }} />
            </div>
        ))}
    </div>
)

export default TodoList;