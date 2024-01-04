import React from 'react'

const ListItem = ({text,className,path}) => {
  return (
    <li className={`${className} font-poppins`}> <a href={path}>{text}</a></li>
  )
}

export default ListItem