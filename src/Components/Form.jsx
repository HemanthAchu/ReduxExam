import React, {useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo,TodoCount } from "../Redux/todo";

const Form = () => {
  const [checkBox,setCheckBox]=useState({
    status:"",id:""
})
  const {todoArray,counter} =useSelector((state)=>state.todo)
  const dispatch=useDispatch()
    const [check, setCheck] = useState(false);
    const [id,setid] =useState("")

const[tick,settick]=useState('')

    useEffect(() => {

      
      const listGroupItem = document.getElementById(`listItem-${tick}`);
      console.log(id);

      if (listGroupItem) {
        listGroupItem.style.backgroundColor = check ? "#C8FFE0" : "white";
  
      }
    }, [counter]);

    const handleCheck=(status,id)=>{
      setCheckBox({status:status,id:id})
      dispatch(TodoCount(checkBox))
  }
useEffect(()=>{
  handleCheck()
},[checkBox.status])

  return (
    <div>
    <ul>
    {todoArray?.map((add,id)=>(
      
      <div className={ add.status &&'bg-success'}>
        <li   id={`listItem-${add.id}`} key={id}    className={' form-inline m-2  d-flex justify-content-between align-items-center'} >
      <h5 className='ps-3'>
        <input type="checkbox" checked={add.status} onChange={e=>handleCheck(e.target.checked,add.id)}
                className='me-3'/>{add.text}</h5> <button onClick={()=> dispatch(deleteTodo(add.id))} className='btn btn-danger me-3'> Delete</button></li>
      </div>
     
     
    ))}

      

    </ul>
    </div>
  )
}

export default Form
