import React, { useState } from 'react'
import { useEffect } from 'react';
import Todo from './Todo';

export default function DataFetch() {
    const [todos, setTodos] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            if(!res.ok){
                throw Error('Something wents wrong. Try to figure it out')
            } else {
                return res.json()
            }
        })
        .then(data => {
            setTodos(data);
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error.message);
            setError(error.message);
            setIsLoading(false);
        });
    }, [])
  return (
    <div>
        {error && <h1 style={{color: 'red'}}>{error}</h1>}
        {isLoading && <h1>Data is loading</h1>}
        {todos && todos.map(todo => <Todo key={todo.id} {...todo}/>)}
    </div>
  )
}
