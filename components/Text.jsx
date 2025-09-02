import React from 'react'

const Text = ({
    text, 
    className
}) => {
  return (
    <p className={ `${className} text-dark text-sm `} >
        {text}
    </p>
  )
}

export default Text