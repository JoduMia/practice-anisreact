import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../POPDRILLING/UserContext'

const Myself = () => {
  const ring = useContext(UserContext)
  return (
    <div className='father'>
      <h3>This is myself</h3>
      <h3>{ring}</h3>
    </div>
  )
}

export default Myself