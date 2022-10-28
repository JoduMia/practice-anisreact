import React from 'react'
import { UserContext } from '../../POPDRILLING/UserContext';
import Aunty from '../Aunty/Aunty'
import Father from '../Father/Father'
import './Grandpa.css';


const Grandpa = () => {
  return (
    <div className='grandpa'>
      <h1 className='center'>GrandFather</h1>
      <UserContext.Provider value={'ring'}>
        <section className='flex'>
          <Father />
          <Aunty />
        </section>
      </UserContext.Provider>
    </div>
  )
}

export default Grandpa