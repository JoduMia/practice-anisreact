import React from 'react'
import { useState } from 'react'

const UseEffectExp = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count => count + 1)}>INcrease</button>
    </div>
  )
}

export default UseEffectExp