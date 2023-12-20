import React from 'react'
import Container from '../container/Container'
import Heading from '../heading/Heading'
import Paragraph from '../paragraph/Paragraph'

const Portfolio = () => {
  return (
    <section className='py-20'>
        <Container>
            <div className='text-center'>
                <Heading className='text-5xl text-white mb-16 border-b-4 border-primary pb-4 inline-block' text='My' span=' Work'/>
                <div className='grid grid-cols-3'>
                    <div className='col-span-1 h-80 bg-red-700 cursor-pointer relative group '>
                        <div className='hidden group-hover:flex justify-center items-center absolute top-0 left-0 w-full h-full hover:bg-black opacity-30 z-20'>
                            <div className='text-white z-20'>
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