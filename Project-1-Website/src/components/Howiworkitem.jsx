import React from 'react'

const Howiworkitem = ({step,title,dec,img}) => {
  return (
    <div>
      <div className='how-work-item'>
      <div className="how-work-header">
        <div className="icon-box">
          <img src={img} alt="" />
        </div>
        <div className="how-work-step-no text-white">
          <p>{step}</p>
        </div>
      </div>
      <div className="how-work-item-content text-white">
        <h3 className>{title}</h3>
        <p>{dec}</p>
      </div>
      </div>
    </div>
  )
}

export default Howiworkitem
