import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [users,setUsers]=useState([])

  useEffect(()=>{

    const URL="https://jsonplaceholder.typicode.com/users"
    fetch(URL).then((res)=>{
      return res.json()
    }).then((user)=>{
      setUsers(user)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <>
   <pre>
    {JSON.stringify(users,"",2)}
   </pre>
    </>
  )
}

export default App
