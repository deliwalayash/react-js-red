import { useState } from 'react'

import './App.css'



function App() {


  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
    cpassword:"",
    course:"",
  })

  const handleChange= (e)=>{
  
    setUser({...user,[e.target.name]:e.target.value})

    // setUser({...user,[e.target.id]:e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(user)
  }

  return (
    <>


<div className='dark bg-gray-900 min-h-screen p-6'>
  <h1 className='text-white text-center text-4xl my-20'>Form Validation</h1>
  <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
  <div className="mb-5">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required onChange={handleChange} value={user.name} name='name'/>
  </div>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required onChange={handleChange} value={user.email} name='email'/>
  </div>
  <div className='mb-5'>
    <div>
  <label htmlFor="course" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course</label>
  <select id="course" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="course" value="{user.course}" onChange={handleChange}>
    <option value="FSD">FSD</option>
    <option value="AI/ML">AI/ML</option>
    <option value="UI/UX">UI/UX</option>
    <option value="DATA SCIENCE">DATA SCIENCE</option>
    <option value="DIGITAL MARKETING">DIGITAL MARKETING</option>
  </select>
</div>


  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required onChange={handleChange} value={user.password} name='password'/>
  </div>
 
  <div className="mb-5">
    <label htmlFor="cpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
    <input type="password" id="cpassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Confirm Passowrd' required onChange={handleChange} value={user.cpassword} name='cpassword'/>
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
