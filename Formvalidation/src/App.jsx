import { useRef, useState } from 'react'

import './App.css'



function App() {


  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
    cpassword:"",
    course:"",
  })
  const [err,setErr]=useState({})

  const handleChange= (e)=>{
  
    setUser({...user,[e.target.name]:e.target.value})

    setErr({...err,[e.target.name +"Error"]:""})
  }
  const formref=useRef()

  const handleSubmit = (e)=>{
    e.preventDefault()
    const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    
    const newError={}
    if(user.name.trim()==""){
      newError.nameError="Please Enter Valid Name"
    }
    if(user.email.trim()=="" || !emailRegex.test(user.email)){
      newError.emailError="Please Enter Valid Email"
    }
    if(user.course == ""){
      newError.courseError = "Please Eneter Course"
    }
    if(user.password.trim()== "" || user.password.length <8){
      newError.passwordError="Please Enter Valid 8 Digita Password"
    }
    if(user.cpassword.trim()=="" || user.password != user.cpassword ){
      newError.cpasswordError="please Enetr valid confim Password"
    }

    setErr(newError)

    if(Object.keys(newError).length > 0){
      return
    }

    formref.current.submit()

  }

  return (
    <>


<div className='dark bg-gray-900 min-h-screen p-6'>
  <h1 className='text-white text-center text-4xl my-20'>Form Validation</h1>
  <form className="max-w-sm mx-auto" noValidate onSubmit={handleSubmit} ref={formref}>
  <div className="mb-5">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required onChange={handleChange} value={user.name} name='name'/>
      <p class="mt-2 text-sm text-red-600 dark:text-red-500" >{err.nameError}</p>
  </div>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required onChange={handleChange} value={user.email} name='email'/>
    <p class="mt-2 text-sm text-red-600 dark:text-red-500">{err.emailError}</p>
  </div>
  <div className='mb-5'>
    <div>
  <label htmlFor="course" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course</label>
  <select id="course" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="course" value={user.course} onChange={handleChange}>
    <option value="">Please Select Course</option> 
    <option value="FSD">FSD</option>
    <option value="AI/ML">AI/ML</option>
    <option value="UI/UX">UI/UX</option>
    <option value="DATA SCIENCE">DATA SCIENCE</option>
    <option value="DIGITAL MARKETING">DIGITAL MARKETING</option>
 
  </select>
     <p class="mt-2 text-sm text-red-600 dark:text-red-500">{err.courseError}</p>
</div>


  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required onChange={handleChange} value={user.password} name='password'/>
    <p class="mt-2 text-sm text-red-600 dark:text-red-500">{err.passwordError}</p>
  </div>
 
  <div className="mb-5">
    <label htmlFor="cpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
    <input type="password" id="cpassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Confirm Passowrd' required onChange={handleChange} value={user.cpassword} name='cpassword'/>
    <p class="mt-2 text-sm text-red-600 dark:text-red-500">{err.cpasswordError}</p>
  </div>
  
 <div className='text-center'>
   <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
 </div>
</form>
</div>


    </>
  )
}

export default App
