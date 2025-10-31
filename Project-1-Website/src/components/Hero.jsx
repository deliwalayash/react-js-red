import React from 'react'
import Button1 from './Button1'
import Button2 from './Button2'
import logo from '../assets/images/company-logo-3.svg';
import logo1 from '../assets/images/company-logo-2.svg';
import logo2 from '../assets/images/company-logo-3.svg';
import logo3 from '../assets/images/company-logo-4.svg';




const Hero = () => {
  return (
   <>
   <div className='hero'>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-12">
          <div className="hero-content">
            <div className="section-title">
              <h1>
                Transform your Business with the <span>Power of AI</span>
              </h1>
              <p>
                In a world where cyberattacks are becoming more sophisticated, your business deserves the best protection. Our expert team leverages cutting-edge technology.
              </p>
              <div className='mt-5 d-flex gap-5 justify-content-center'>

              <Button2 text={"Get Started Today"}></Button2>
              <Button1 text={"Join Now"}></Button1>
              </div>
            </div>
            <div className="hero-company-slider">
              <p>Already Chosen by leaders</p>
            </div>
            <div>
              <marquee behavior="" direction="" >
                <img src={logo} alt="company logo"  className="me-5"/>
                <img src={logo1} alt="company logo"  className="me-5"/>
                <img src={logo2} alt="company logo" className="me-5" />
                <img src={logo3} alt="company logo" />
              </marquee>
            </div>
          </div>
        </div>

      </div>
    </div>
   </div>
   </>
  )
}

export default Hero
