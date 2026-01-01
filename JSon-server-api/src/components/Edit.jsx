import React from 'react'
import axios from 'axios'
import  { useEffect, useState } from 'react'
import { API_URL } from '../api/api'
import { useNavigate, useParams } from 'react-router-dom'


const Edit = () => {
    const navigate=useNavigate()

    const {id} =useParams()

      const [newpost,setNewpost]=useState({
        title:"",
        views:""
      })

      const getData = async()=>{
        try{
            const res=await axios.get(`${API_URL}/posts/${id}`)
        console.log(res.data)
        setNewpost(res.data)
        }
        catch(err){
            console.log(err)
        }
      }

      useEffect(()=>{
        getData()
      },[])

       const handleChange = (e)=>{
    setNewpost({...newpost,[e.target.id]:e.target.value})
  }
  const handleSubmit = async(e)=>{
    e.preventDefault()
    try{
      const res=await axios.put(`${API_URL}/posts/${id}`,newpost)
     navigate('/')
    }catch(err){
      console.log(err)
    }
    getData() 
    setNewpost({
      title:"",views:""
    })
  }


  return (
    <div>

           <form action="" onSubmit={handleSubmit} >
        <label htmlFor="title">Title:</label>
        <input type="text" id='title' value={newpost.title} onChange={handleChange}/>
        <br />
        <br />

        <label htmlFor="views">Views:</label>
        <input type="number" id='views' value={newpost.views} onChange={handleChange} />
        <br />
        <br />

        <button type='submit'>Update</button>
      </form>
      
    </div>
  )
}

export default Edit
