import React, { useState } from 'react'

export default function Form() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const nameChange = (e) => {
        setName(e.target.value);
    };

    const emailChange = (e) => {
        setEmail(e.target.value);
    };

    const passwordChange = (e) => {
        setPassword(e.target.value);
    };

    const user = {name,email,password};
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    };

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor="name">Name: </label>
                <input type="text" name='name' value={name} onChange={nameChange} />
            </div>

            <div className='form-group'>
                <label htmlFor="email">Email: </label>
                <input type="email" name='email' value={email} onChange={emailChange}/>
            </div>

            <div className='form-group'>
                <label htmlFor="name">Password: </label>
                <input type="password" name='password' value={password} onChange={passwordChange}/>
            </div>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}
