import axios from "axios";
import React, { useState } from "react";
import {API_URL} from '../api/api'
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
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
    const res=await axios.get(`${API_URL}/users/?email=${user.email}`)
    if(res.data.length > 0){
      alert("User already exist")
      return
    }
    await axios.post(`${API_URL}/users`,user)
    navigate('/login')
    
   }catch(err){
    console.log(err)
   }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            value={user.name}
            onChange={handleChange}
          />
        </div>
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
  );
};

export default Signup;
