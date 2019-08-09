import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import TodoForm from './TodoForm';

const App = () => {
    const [todos, setTodos] = useState([]);
    return (
        <div className='App'>
            <h1>
                Todos
            </h1>

            <TodoForm saveTodo={console.warn} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#container')
)
