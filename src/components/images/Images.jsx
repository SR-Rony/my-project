import React from 'react'

const Images = ({className,src,alt}) => {
  return (
    <img className={` object-cover ${className}`} src={src} alt={alt} />
  )
}

export default Images