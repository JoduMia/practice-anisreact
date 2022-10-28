import React from 'react'

const ChildData = "I am form child componet named (Lifting.js)"
export default function Lifting({data, onChildData}) {
    onChildData(ChildData)
  return (
    <div>
        <h1>{data}</h1>
    </div>
  )
}
