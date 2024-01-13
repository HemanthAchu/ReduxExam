import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, todoArray } from '../Redux/todo';
import Form from './Form';

const Addform = () => {
    const [input,setinput] =useState('');
    

const dispatch = useDispatch()
const handleAdd = (e) => {
  if(!input){
    alert("Enter value :(")
    e.preventDefault();
    setinput(""); 
  }else{
    e.preventDefault();
    const newValue = input;
    dispatch(addTodo({ id: Date.now(), text: newValue }));
    setinput(""); 
    
  }
  
};



  return (
    <div>
      <form onSubmit={handleAdd} className=' form-inline mt-3 ms-3  mb-3 d-flex justify-content-between' >
<label className='sr-only' >Name</label>
<input style={{border:"none"}}
className='w-50 form-control ms-4 '
placeholder='Add Items . . . . . '
value={input}
onChange={(e)=>setinput(e.target.value)}
type="text" />
<button  type='submit' className='btn btn-primary me-4'>submit</button>
      </form>

  <Form/>

   
    </div>
  )
}

export default Addform
