import {  useState } from 'react'

import './App.css'

function App() {
  const [user,setUser]=useState({
    name:"",
    course:"",
    gender:"",
    facilities:[]
  })

  const handleChange = (e)=>{
    const {name,value}=e.target
    setUser((prev)=>({
      ...prev,[name]:value
    }))
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(user)
  }

  return (
    <>
    <form action="" onSubmit={handleSubmit}>

          <label htmlFor="name">Name</label>
      <input type="text" value={user.name} onChange={handleChange} name='name' id='name' />
     <br />
     <label htmlFor="course">Course</label>
    <select name="course" id="course" value={user.course} onChange={handleChange} >
       <option value="">Please Select Course</option>
      <option value="fsd">FSD</option>
      <option value="ui/ux">UI/UX</option>
      <option value="ve">Video Editing</option>
    </select>
    <br />

    <label htmlFor="gender">Gender::</label>
    <label htmlFor="male">Male</label>
    <input type="radio" name="gender" id="male"  onChange={handleChange} value={"male"}/>
      <label htmlFor="female">FeMale</label>
    <input type="radio" name="gender" id="female"  onChange={handleChange} value={"female"}/>
     <label htmlFor="other">Other</label>
    <input type="radio" name="gender" id="other"  onChange={handleChange} value={"OTHER"}/>
    <br />
    <br />
    <label htmlFor="facility">Facilities:</label>
    <label htmlFor="mobile">Mobile:</label>
    <input type="checkbox" id='mobile' value={"mobile"} name='facilities' onChange={handleChange}/>
     <label htmlFor="laptop">Laptop</label>
    <input type="checkbox" id='laptop' value={"laptop"} name='facilities' onChange={handleChange}/>
    
    <br />
    <button type='submit'>Submit</button>
    </form>

     
    </>
  )
}

export default App
