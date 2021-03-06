import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
    const [todos, setTodos] = useState([]);
    return (
        <div className='App'>
            <h1>
                Todos
            </h1>

            <TodoForm saveTodo={(todoText) => {
                const trimmedText = todoText.trim();

                if (trimmedText.length > 0) {
                    setTodos([...todos, trimmedText]);
                }
            }} />
            <TodoList todos={ todos }
            deleteTodo = {(todoIndex) => {
                const newTodos = todos.filter((_, index) => index !== todoIndex);

                setTodos(newTodos);
            }} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#container')
)
