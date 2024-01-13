import React from 'react'
import { useSelector } from 'react-redux'

const Totalitems = () => {
  const {todoArray}=useSelector((state)=>state.todo)
  return (
    <div style={{height:"80px"}} className='form-inline  py-3'>
     <h2 style={{float:"left"}} className='ps-5' >Total complete items: {todoArray.length}</h2>
    </div>
  )
}

export default Totalitems
