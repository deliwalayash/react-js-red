import React from 'react'

const Factscards = ({title,counter,dec,dec2}) => {
  return (
    <div>
        <div className="facts-item h-100">
            <div className="facts-item-title">
                <h3>{title}</h3>
            </div>
            <div className="facts-item-counter">
                <h2>
                    {counter}
                </h2>
                <p>{dec}</p>
            </div>
            <div className="facts-item-content">
                <p>
                    {dec2}
                </p>
            </div>
        </div>
      
      
    </div>
  )
}

export default Factscards
