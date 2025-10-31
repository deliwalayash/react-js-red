import React from 'react'

const AboutUsBox = ({heading,count,imgsrc,imgsrc2}) => {
  return (
    <div>
      <div className='about-us-box'>
        <div className='about-us-item'>

          <div className=''>

            <h3 className='text-white'>{heading}</h3>
            <h2>
                <span className='counter'>{count}</span>
                +
            </h2>
          </div>
          <div className="icon-box">
            <img src={imgsrc} alt="" />
          </div>
        </div>
        <div className='about-item-image'>
          <img src={imgsrc2} alt="" />

        </div>
      </div>
    </div>
  )
}

export default AboutUsBox
