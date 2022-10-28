import React from 'react'
import { useState } from 'react';
import NewTodo from './NewTodo'

import Todos from './Todos'

const Home = () => {
  const todos = ['Todo-1', 'Todo-2', 'Todo-3', 'Todo-4'];
  const [todo, setNewTodo] = useState(todos);
  const handleTodo = (newTodo) => {
     setNewTodo([...todo, newTodo]);
  };
  return (
    <div>
      <NewTodo handleTodo={handleTodo}/>
      <Todos todos={todo}/>
    </div>
  )
}

export default Home