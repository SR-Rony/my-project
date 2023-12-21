import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`text-base md:text-xl  font-poppins font-semibold px-5 py-2 md:px-10 md:py-4 bg-transparent text-primary ring ring-primary hover:text-white hover:bg-primary ${className}`}>{text}</button>
  )
}

export default Button