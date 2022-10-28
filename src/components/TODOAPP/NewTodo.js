import React from 'react'
import { useState } from 'react';

const NewTodo = ({handleTodo}) => {
    const [todo, setTodo] = useState('')
    const handleChange = (e) => {
        setTodo(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleTodo(todo)
    };
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor="todo">NewTodo: </label>
                <input type="text" name='todo' id='todo' onChange={handleChange} required/>
            </div>
            <button type='submit'>Add Todo</button>
        </form>
    </div>
  )
}

export default NewTodo