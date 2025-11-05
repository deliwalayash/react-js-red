import React from 'react'
import Headingbtn from './Headingbtn'
import ServicesHeading from './ServicesHeading'
import Serviceitem from './Serviceitem'
import serimg from '../assets/images/service-item-1.png'
import serimg2 from '../assets/images/service-item-2.png'
import serimg3 from '../assets/images/service-item-3.png'

const Services = () => {
  return (
    <div className='mb-5'>
      <div className="text-center section-title section-title-center ">
        <Headingbtn text={"Our Services"}></Headingbtn>
       <ServicesHeading text={<>
            AI-driven design services for <br /> future innovations
        </>}></ServicesHeading>
      </div>
          <div className='container'>

      <div className="row ">
        <div className="col-lg-4 col-md-6">
          {/* services item starts */}
          <Serviceitem heading={"AI Strategy & Consulting"} desc={"We assess your business, identify high impact AI opportunities, and guide you with a clear roadmap for implementation."} imgsrc={serimg}></Serviceitem>
        </div>
        <div className="col-lg-4 col-md-6">
          {/* services item starts */}
          <Serviceitem heading={"AI Integration & Deployment"} desc={"We assess your business, identify high impact AI opportunities, and guide you with a clear roadmap for implementation."} imgsrc={serimg2}></Serviceitem>
        </div>
        <div className="col-lg-4 col-md-6">
          {/* services item starts */}
          <Serviceitem heading={"Custom AI Solutions"} desc={"We assess your business, identify high impact AI opportunities, and guide you with a clear roadmap for implementation."} imgsrc={serimg3}></Serviceitem>
        </div>

      </div>
    </div>
  </div>

  )
}

export default Services
