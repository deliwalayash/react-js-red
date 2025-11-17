import { useRef, useState } from 'react'

import './App.css'

function App() {
  const [task,setTask]=useState([])
  const ip=useRef(null)
  const handleSubmit = (e)=>{
    e.preventDefault()
    setTask([...task,ip.current.value])
    ip.current.value=""
  }
  return (
    <>
      <h1>hello world</h1>
      <form action="" onSubmit={handleSubmit}>

      <input type="text" ref={ip}/>
      <br />
      <br />
      <button type='submit'>Submit</button>
      
      <pre>{JSON.stringify(task,null,2)}</pre>

      </form>
    </>
  )
}

export default App
