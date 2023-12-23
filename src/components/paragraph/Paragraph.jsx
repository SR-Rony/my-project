import React from 'react'

const Paragraph = ({text,className}) => {
  return (
    <p className={`${className} font-poppins text-base md:text-xl font-medium`}>{text}</p>
  )
}

export default Paragraph