import React from 'react'
import buttonicon from '../assets/images/arrow-white.svg'

const Project_Card = ({img,title,dec}) => {
  return (
    <div>
      <div className="project-item">
        <div className="project-image">
            <figure className='image-anime'>
                <img src={img} alt="" />

            </figure>
        </div>
        <div className="project-content">
            <h3>
                <a href="" className='text-decoration-none text-white'>
                    {title}
                </a>
            </h3>
            <p>
                {dec}
            </p>
        </div>
        <div className="project-btn">
            <img src={buttonicon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Project_Card
