import React, { useState, useEffect } from 'react'

export default function USESTATE() {
    const [count, setCount] = useState(false);
    const [name, setName] = useState('');
    useEffect(() => {
        if(name.length < 2){
            setCount(false)
        } else {
            setCount(true)
        }
    }, [name]);
    const handleChange = (e) => {
        setName(e.target.value)
    };
  return (
    <div>
        <input type="text" onChange={handleChange}
        className={`${count && 'valid'}`} />
        <p>{name}</p>
    </div>
  )
}


