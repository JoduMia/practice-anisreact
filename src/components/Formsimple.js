import React from 'react'
import { useState } from 'react';

export default function Formsimple() {
    const [user, setUser] = useState({name: '', email: '', password: ''})
    const handleUser = (e) => {
        setUser({...user,[e.target.name]: e.target.value})
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    };
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' onChange={handleUser} />
            </div>

            <div className='form-group'>
                <label htmlFor="email">Email:</label>
                <input type="email" name='email' onChange={handleUser} />
            </div>

            <div className='form-group'>
                <label htmlFor="password">Password:</label>
                <input type="password" name='password' onChange={handleUser} />
            </div>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}
