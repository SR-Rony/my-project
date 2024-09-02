import React from 'react'
import { Link } from 'react-router-dom'
import Images from '../images/Images'
import Paragraph from '../paragraph/Paragraph'
import { IoEyeOutline } from "react-icons/io5";

const PortfolioItem = ({to,image}) => {
  return (
    <>
        <Link target="_blank" to={to}>
            <Images className='h-full w-full group-hover:scale-110 duration-100 ' src={image}/>
            <div className='hidden group-hover:flex justify-center items-center absolute top-0 left-0 w-full h-full hover:bg-black opacity-50 text-white z-20'>
                <div className='text-center'>
                    <IoEyeOutline className='text-white text-2xl text-center inline-block'/>
                    <Paragraph text='Vew project'/>
                </div>
            </div>
        </Link>
    </>
  )
}

export default PortfolioItem