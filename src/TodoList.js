import React from 'react';
import deleteButton from './icons/deleteButton.png'

const TodoList = ({todos, deleteTodo}) => (
    <div>
        {todos.map((todo, index) => (
            <div style={{display: 'flex', width: '200px'}}>
                <input type='checkbox' onChange={() => {console.log(todo)}} />
                <div style={{'margin-left': '30px'}}>{ todo }</div>
                <img style={{'margin-left': '30px', width: '25px', height: '25px'}} src={deleteButton} alt='deleteButton' onClick={() => {
                    deleteTodo(index);
                }} />
            </div>
        ))}
    </div>
)

export default TodoList;