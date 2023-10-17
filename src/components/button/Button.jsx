import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`text-xl font-poppins font-semibold px-10 py-4 bg-transparent text-primary ring ring-primary hover:text-white hover:bg-primary ${className}`}>{text}</button>
  )
}

export default Button