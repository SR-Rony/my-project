import React from 'react'
import Container from '../container/Container'
import Heading from '../heading/Heading'
import Paragraph from '../paragraph/Paragraph'
import img1 from '../../assets/all.jpg'
import img2 from '../../assets/kebord.jpg'
import img3 from '../../assets/laptop.jpg'
import Images from '../images/Images'

const Portfolio = () => {
  return (
    <section id='portfolio' className='py-10 md:py-20'>
        <Container>
            <div className='text-center'>
                <Heading className='text-3xl md:text-5xl text-white mb-16 border-b-4 border-primary pb-4 inline-block' text='My' span=' Portfolio'/>
                <div className='grid grid-cols-3 gap-5 my-5'>
                    <div className={`col-span-3 md:col-span-1 h-80 cursor-pointer relative group rounded-md overflow-hidden`}>
                        <Images className='h-full w-full ' src={img3}/>
                        <div className='hidden group-hover:flex justify-center items-center absolute top-0 left-0 w-full h-full hover:bg-black opacity-70 text-white z-20'>
                            <div className=''>
                                <Paragraph text='Project title'/>
                                <Paragraph text='category'/>
                            </div>
                        </div>
                    </div>
                    <div className={`col-span-3 md:col-span-1 h-80 cursor-pointer relative group rounded-md overflow-hidden`}>
                        <Images className='h-full w-full' src={img1}/>
                        <div className='hidden group-hover:flex justify-center items-center absolute top-0 left-0 w-full h-full hover:bg-black opacity-70 text-white z-20'>
                            <div className=''>
                                <Paragraph text='Project title'/>
                                <Paragraph text='category'/>
                            </div>
                        </div>
                    </div>
                    <div className={`col-span-3 md:col-span-1 h-80 cursor-pointer relative group rounded-md overflow-hidden`}>
                        <Images className='h-full w-full' src={img2}/>
                        <div className='hidden group-hover:flex justify-center items-center absolute top-0 left-0 w-full h-full hover:bg-black opacity-70 text-white z-20'>
                            <div className=''>
                                <Paragraph text='Project title'/>
                                <Paragraph text='category'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-5 my-5'>
                    <div className={`col-span-3 md:col-span-1 h-80 cursor-pointer relative group rounded-md overflow-hidden`}>
                        <Images className='h-full w-full' src={img1}/>
                        <div className='hidden group-hover:flex justify-center items-center absolute top-0 left-0 w-full h-full hover:bg-black opacity-70 text-white z-20'>
                            <div className=''>
                                <Paragraph text='Project title'/>
                                <Paragraph text='category'/>
                            </div>
                        </div>
                    </div>
                    <div className={`col-span-3 md:col-span-1 h-80 cursor-pointer relative group rounded-md overflow-hidden`}>
                        <Images className='h-full w-full' src={img2}/>
                        <div className='hidden group-hover:flex justify-center items-center absolute top-0 left-0 w-full h-full hover:bg-black opacity-70 text-white z-20'>
                            <div className=''>
                                <Paragraph text='Project title'/>
                                <Paragraph text='category'/>
                            </div>
                        </div>
                    </div>
                    <div className={`col-span-3 md:col-span-1 h-80 cursor-pointer relative group rounded-md overflow-hidden`}>
                        <Images className='h-full w-full' src={img3}/>
                        <div className='hidden group-hover:flex justify-center items-center absolute top-0 left-0 w-full h-full hover:bg-black opacity-70 text-white z-20'>
                            <div className=''>
                                <Paragraph text='Project title'/>
                                <Paragraph text='category'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Portfolio