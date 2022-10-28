import React from 'react';
import { useContext } from 'react';
import { UserContext } from './UserContext';


export default function Component5() {
    const user = useContext(UserContext)
  return (
    <div>
        <h2>{user.name}</h2>
    </div>
  )
}
