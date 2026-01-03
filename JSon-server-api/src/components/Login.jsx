import React from 'react'
import { Navigate,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import {API_URL}  from '../api/api';

const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setUser({...user,[e.target.id]:e.target.value})
  };

  const handleSubmit =async (e)=>{
    e.preventDefault()
   try{
    const res=await axios.get(`${API_URL}/users/?email=${user.email}&password=${user.password}`)
    if(res.data.length == 0){
      alert("Email id and password mismatch")
    }
    console.log(res.data)
    localStorage.setItem("user",JSON.stringify(res.data[0].name))
    alert("login successfully")
    navigate('/')
    
   }catch(err){
    console.log(err)
   }
  }


  return (
    <div>
        <div className='container'>
 <form onSubmit={handleSubmit}>
       
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>      
    </div>
  )
}

export default Login
