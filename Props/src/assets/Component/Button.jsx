import React from 'react'

const Button = (props) => {
  return (
    <div>
   <button className= {`btn btn-${props.varient}`}>{props.text}</button>
    </div>
  )
}

export default Button
