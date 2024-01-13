import { useEffect } from 'react';
import './App.css'
import Addform from './Components/Addform';
import Form from './Components/Form';
import Totalitems from './Components/Totalitems';

function App() {


  return (
    <>
<div className='text-center container mt-5 p-4 border'>
  <h1>ToDoList</h1>
   <Addform/>
  
   <Totalitems/>
</div>
    </>

  )
}

export default App
