import React from 'react'
import axios from 'axios'
import  { useEffect, useState } from 'react'
import { API_URL } from '../api/api'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const [newpost,setNewpost]=useState({
    title:"",
    views:""
  })
  const [post,setPost]=useState([])

  const navigate=useNavigate()

  const getData=async()=>{
 try{
     const res=await axios.get(`${API_URL}/posts`)
    setPost(res.data)
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
      const res=await axios.post(`${API_URL}/posts`,newpost)
    }catch(err){
      console.log(err)
    }
    getData() 
    setNewpost({
      title:"",views:""
    })
  }

  const handleDelete = async(id)=>{
    try{
      await axios.delete(`${API_URL}/posts/${id}`)
    }
    catch(err){
      console.log(err)
    }
    getData()

  }
  return (
    <div className='container'>
          <form action="" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id='title' value={newpost.title} onChange={handleChange}/>
        <br />
        <br />

        <label htmlFor="views">Views:</label>
        <input type="number" id='views' value={newpost.views} onChange={handleChange} />
        <br />
        <br />

        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
      {
        post.map((curEle)=>{
          return(
            <div key={curEle.id}>
              <h1>Id:{curEle.id}</h1>
              <h1>Title:{curEle.title}</h1>
              <h1>Views:{curEle.views}</h1>
              <button onClick={()=>{handleDelete(curEle.id)}} className='btn btn-danger me-3'>Delete</button>
              <button onClick={()=>{navigate(`/edit/${curEle.id}`)}} className='btn btn-warning'>Edit</button>
            </div>
          )
        })
      }
      
    </div>
  )
}

export default Home
