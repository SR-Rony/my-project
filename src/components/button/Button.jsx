import React from 'react'

const Button = ({text,className,onClick}) => {
  return (
    <button onClick={onClick} className={`text-base lg:text-xl  font-poppins rounded-md duration-100 font-semibold px-5 py-2 lg:px-10 lg:py-4 bg-transparent text-primary ring ring-primary hover:text-white hover:bg-primary ${className}`}>{text}</button>
  )
}

export default Button