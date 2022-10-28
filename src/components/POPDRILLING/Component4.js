import React from 'react';
import { useContext } from 'react';
import { UserContext } from './UserContext';

export default function Component4() {
    const user = useContext(UserContext);
  return (
    <div>
        <h1>{user.name}</h1>
    </div>
  )
}
