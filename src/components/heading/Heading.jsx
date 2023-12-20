import React from 'react'

const Heading = ({text,className,span}) => {
  return (
    <h2 className={`${className} font-poppins font-bold`}>{text}<span className='text-primary'>{span}</span></h2>
  )
}

export default Heading