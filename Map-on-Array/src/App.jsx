

import { useState } from 'react'
import './App.css'

function App() {
 const users=[{
  id:1,
  name:"yash",
  marks:52
 },
 {
  id:2,
  name:"vihaan",
  marks:50,
 },
 {
  id:3,
  name:"malav",
  marks:60
 }
]
const [student,setStudent]=useState(users)

const handledelete =(id)=>{
  const updatedlist=student.filter((curEle)=>{
    return curEle.id !== id
  })
  setStudent(updatedlist)
  
}

  return (
    <>
      {
        student.map((curEle,idx)=>{
          return(

          <div key={idx}>
            <h1>{curEle.id}</h1>
            <h1>{curEle.name}</h1>
            <h1>{curEle.marks}</h1>
            <button onClick={()=>{handledelete(curEle.id)}}>Delete</button>

          </div>
          )
        })
      }
    </>
  )
}

export default App
