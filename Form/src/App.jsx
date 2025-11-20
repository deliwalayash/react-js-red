import {  useState } from 'react'

import './App.css'

function App() {
  const [user,setUser]=useState({
    name:"",
    course:"",
    gender:"",
    facilities:[]
  })

  const [users,setUsers]=useState([])

  const handleChange = (e)=>{
    const {name,value,checked,type}=e.target

    if(type == "checkbox"){
      setUser((prev)=>{
        let updataedfacilities=[]
        if(checked){
          updataedfacilities=[...prev.facilities,value]
        }
        else{
          updataedfacilities=prev.facilities.filter(item =>item !== value)
        }
        return {
          ...prev,
          facilities:updataedfacilities
        }
      })
    }
    else{

      setUser((prev)=>{
        return {
          ...prev,[name]:value
        }
      })
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(user)
   
    setUsers((prev)=>{
    return  [...prev,user]
    })

     setUser({
      name:"",
      course:"",
      gender:"",
      facilities:[]
    })
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

   {
    users.map((curEle)=>{
      return (

        <div>
          <h1>Name:{curEle.name}</h1>
          <h1>Course:{curEle.course}</h1>
          <h1>Gender:{curEle.gender}</h1>
          <h1>Facilities:{curEle.facilities}</h1>
        </div>
      )
    })
   }

    </>
  )
}

export default App
