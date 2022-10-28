import React from 'react'
import Component2 from './Component2';
import Component5 from './Component5';
import { UserContext } from './UserContext';

export default function Component1() {
    const user = {id:1, name: 'Anisul islam'}
  return (
    <div>
        <UserContext.Provider value={user}>
            <Component2 />
            <Component5 />
        </UserContext.Provider>
    </div>
  )
}
