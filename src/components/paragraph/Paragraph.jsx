import React from 'react'

const Paragraph = ({text,className}) => {
  return (
    <p className={`${className} font-poppins text-xl font-medium`}>{text}</p>
  )
}

export default Paragraph