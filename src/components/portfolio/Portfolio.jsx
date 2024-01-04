import React from 'react'
import Container from '../container/Container'
import Heading from '../heading/Heading'
import Paragraph from '../paragraph/Paragraph'
import hockey from '../../assets/hockey.png'
import photography from '../../assets/slider.jpg'
import fast from '../../assets/fast-jaw.png'
import linkdin from '../../assets/linkdin.jpg'
import chatting from '../../assets/chatting.jpg'
import Ecommerce from '../../assets/Ecommerce.png'
import Images from '../images/Images'
import { IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <section id='portfolio' className='py-10 md:py-20'>
        <Container>
            <div className='text-center'>
                <Heading className='text-3xl md:text-5xl text-white mb-16 border-b-4 border-primary pb-4 inline-block' text='My' span=' Portfolio'/>
                <div className='grid grid-cols-12 gap-5 my-5'>
                    <div className={`col-span-12 md:col-span-6 lg:col-span-4 h-80 cursor-pointer relative group rounded-md overflow-hidden`}>
                        <Link target="_blank" to='https://hockey-six.vercel.app/'>
                        <Images className='h-full w-full group-hover:scale-110 duration-100 ' src={hockey}/>
                        <div className='hidden group-hover:flex justify-center items-center absolute top-0 left-0 w-full h-full hover:bg-black opacity-50 text-white z-20'>
                            <div className='text-center'>
                                <IoEyeOutline className='text-white text-2xl text-center inline-block'/>
                                <Paragraph text='Vew project'/>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className={`col-span-12 md:col-span-6 lg:col-span-4 h-80 cursor-pointer relative group rounded-md overflow-hidden`}>
                        <Link target="_blank" to='https://photography-b7rb.vercel.app/'>
                        <Images className='h-full w-full group-hover:scale-110 duration-100' src={photography}/>
                        <div className='hidden group-hover:flex justify-center items-center absolute top-0 left-0 w-full h-full hover:bg-black opacity-50 text-white z-20'>
                            <div className=''>
                                <IoEyeOutline className='text-white text-2xl text-center inline-block'/>
                                <Paragraph text='Vew project'/>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className={`col-span-12 md:col-span-6 lg:col-span-4 h-80 cursor-pointer relative group rounded-md overflow-hidden`}>
                        <Link target="_blank" to='https://fast-jao.vercel.app/'>
                        <Images className='h-full w-full group-hover:scale-110 duration-100' src={fast}/>
                        <div className='hidden group-hover:flex justify-center items-center absolute top-0 left-0 w-full h-full hover:bg-black opacity-50 text-white z-20'>
                            <div className=''>
                                <IoEyeOutline className='text-white text-2xl text-center inline-block'/>
                                <Paragraph text='Vew project'/>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className='grid grid-cols-12 gap-5 my-5'>
                    <div className={`col-span-12 md:col-span-6 lg:col-span-4 h-80 cursor-pointer relative group rounded-md overflow-hidden`}>
                        <Link target="_blank" to='https://linkedin-7nz6.vercel.app/'>
                        <Images className='h-full w-full group-hover:scale-110 duration-100' src={linkdin}/>
                        <div className='hidden group-hover:flex justify-center items-center absolute top-0 left-0 w-full h-full hover:bg-black opacity-50 text-white z-20'>
                            <div className=''>
                                <IoEyeOutline className='text-white text-2xl text-center inline-block'/>
                                <Paragraph text='Vew project'/>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className={`col-span-12 md:col-span-6 lg:col-span-4 h-80 cursor-pointer relative group rounded-md overflow-hidden`}>
                        <Link target="_blank" to='https://chatting-application-six.vercel.app/'>
                        <Images className='h-full w-full group-hover:scale-110 duration-100' src={chatting}/>
                        <div className='hidden group-hover:flex justify-center items-center absolute top-0 left-0 w-full h-full hover:bg-black opacity-50 text-white z-20'>
                            <div className=''>
                                <IoEyeOutline className='text-white text-2xl text-center inline-block'/>
                                <Paragraph text='Vew project'/>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className={`col-span-12 md:col-span-6 lg:col-span-4 h-80 cursor-pointer relative group rounded-md overflow-hidden`}>
                        <Link target="_blank" to='https://orebi-ecommerce-sigma.vercel.app/?fbclid=IwAR1DPQ37UOLRGTIa1Qu1jKybV2pcBYDYH2mIZCKOXd4eX1rr3pmFtKmKV-o'>
                        <Images className='h-full w-full group-hover:scale-110 duration-100' src={Ecommerce}/>
                        <div className='hidden group-hover:flex justify-center items-center absolute top-0 left-0 w-full h-full hover:bg-black opacity-50 text-white z-20'>
                            <div className=''>
                                <IoEyeOutline className='text-white text-2xl text-center inline-block'/>
                                <Paragraph text='Vew project'/>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Portfolio