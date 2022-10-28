import React, { useState } from 'react'

export default function Toggle() {
    const [toggle, setToggle] = useState(true);
  return (
    <div style={{margin: '10px', backgroundColor: 'yellow', padding: '10px'}}>
        {toggle && (
            <p style={{margin: '10px', backgroundColor: 'green', padding: '10px', color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quaerat, vitae eos hic laborum tempore? Consequatur beatae facere velit fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio perferendis dicta earum! Ullam velit eius aperiam sed dignissimos ratione pariatur ipsum molestias soluta natus et exercitationem odio doloremque, officiis consequuntur blanditiis commodi nostrum fugiat accusamus voluptatibus? Reprehenderit officia minus voluptatum quia! Quasi exercitationem ducimus asperiores cum, saepe iure culpa.</p>
        )}
        <div style={{textAlign: 'center'}}>
            <button onClick={() => setToggle(!toggle)}>{toggle ? 'Hide' : 'Show'}</button>
        </div>
    </div>
  )
}
