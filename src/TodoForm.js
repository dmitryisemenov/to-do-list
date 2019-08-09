import React, {useState} from 'react';

const TodoForm = ({ saveTodo }) => {
    const [value, setValue] = useState('');

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            saveTodo(value);
            setValue('');
        }}>
            <input variant='outlined' placeholder='Add Todo' margin='normal'
            onChange={(event) => {
                setValue(event.target.value);
            }}
            value={value}></input>
            <button onChange={(event) => {
                setValue(event.target.value);
            }}>Get in the list</button>
        </form>
    )
}

export default TodoForm