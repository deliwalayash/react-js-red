

import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const URL="https://jsonplaceholder.typicode.com/users"
  const [album,setAlbum]=useState([])
  const getAlldata = async ()=>{
    const res=await fetch(URL)
   const data=await res.json()
    setAlbum(data)
  }

  useEffect(()=>{
    getAlldata()
  },[])

  return (
    <>
   {
    album.map((curEle)=>{
        return(
          <div key={curEle.id}>
            <h2>{curEle.name}</h2>
            <h3>{curEle.username}</h3>
            <h3>{curEle.company.name}</h3>
            <a href={curEle.website}>Click me</a>
          </div>
        )
    })
   }
    </>
  )
}

export default App
