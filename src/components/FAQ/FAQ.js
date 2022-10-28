import React from 'react'
import { useState } from 'react'

export default function FAQ({title,answer}) {
    const [toggle, setToggle] = useState(true);
  return (
    <div>
        <div style={{display: 'flex', backgroundColor: 'green', border:'2px solie blue', padding: '10px', margin: '10px', borderRadius: '10px'}}>
            <h1>{title}</h1>
            <button onClick={() => setToggle(!toggle)}>{toggle? '-': '+'}</button>
        </div>
        <div>
            {toggle && (
                <p style={{padding: '10px', margin: '10px'}}>{answer}</p>
            )}
        </div>
    </div>
  )
}
