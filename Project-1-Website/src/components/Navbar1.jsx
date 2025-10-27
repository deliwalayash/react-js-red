import React from 'react'
import logo from '../assets/images/logo.svg'
import Button1 from './Button1'

const Navbar1 = () => {
  return (
  <>
  <nav className='bg-black py-3'>
    <div className='container d-flex justify-content-between'>
    <div>
      <img src={logo} alt="" />
    </div>
    <div className='d-flex align-items-center nav-menu-wrapper'>
      <ul className='list-unstyled d-flex gap-5 fw-bold m-0'>
        <li>
          <a href="" className='text-decoration-none text-white'>Home</a>
        </li>
        <li>
          <a href="" className='text-decoration-none text-white'>About Us</a>
        </li>
        <li>
          <a href="" className='text-decoration-none text-white'>Services</a>
        </li>
        <li>
          <a href="" className='text-decoration-none text-white'>Blog</a>
        </li>
        <li>
          <a href="" className='text-decoration-none text-white'>Pages</a>
        </li>
        <li>
          <a href="" className='text-decoration-none text-white'>Contact US</a>
        </li>
      </ul>
    </div>
    <div>
      <Button1 text={"Get Started"}></Button1>
    </div>

    </div>
  </nav>

  </>
  )
}

export default Navbar1
