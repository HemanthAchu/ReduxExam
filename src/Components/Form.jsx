import React, {useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from "../Redux/todo";
const Form = () => {
  const {todoArray} =useSelector((state)=>state.todo)
  const dispatch=useDispatch()
    const [check, setCheck] = useState(false);
    const [id,setid] =useState("")

    useEffect(() => {
{todoArray.map((add)=>(
  setid(`listItem-${add.id}`)
))}
      const listGroupItem = document.getElementById(id);
      console.log(id);

      if (listGroupItem) {
        listGroupItem.style.backgroundColor = check ? "#C8FFE0" : "white";
      }
    }, [check, todoArray.id]);

 

  return (
    <div>
    <ul>
    {todoArray?.map((add,id)=>(
      
      <li id={`listItem-${add.id}`} key={id}    className=' form-inline m-2  d-flex justify-content-between align-items-center ' >
      <h5 style={{backgroundColor:"whitesmoke"}} className='ps-3'>
        <input type="checkbox" checked={check} 
               onChange={() => setCheck(!check)}  className='me-3'/>{add.text}</h5> <button onClick={()=> dispatch(deleteTodo(add.id))} className='btn btn-danger me-3'> Delete</button></li>
     
    ))}

      

    </ul>
    </div>
  )
}

export default Form
