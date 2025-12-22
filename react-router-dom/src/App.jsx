import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/services'>Services</Link>
    </nav>
   <Routes>

    <Route path='/' element={<Home></Home>} ></Route>
    <Route path='/about' element={<About></About>} ></Route>
    <Route path='/services' element={<Services></Services>} ></Route>
   </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
