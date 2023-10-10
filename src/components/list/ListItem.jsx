import React from 'react'

const ListItem = ({text,className}) => {
  return (
    <li className={`${className} font-poppins`}>{text}</li>
  )
}

export default ListItem