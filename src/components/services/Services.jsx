import React from 'react'
import Container from '../container/Container'
import Heading from '../heading/Heading'
import Paragraph from '../paragraph/Paragraph'
import { FaDesktop } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";


const Services = () => {
  return (
   <section id='services' className='py-10 md:py-20'>
        <Container>
            <div className='text-center'>
                <Heading className='text-3xl md:text-5xl text-white mb-16 border-b-4 border-primary pb-4 inline-block' text='My' span=' Services'/>
            </div>
            <div className="grid grid-cols-12 gap-5">
                <div data-aos="zoom-out-left" className="col-span-12 md:col-span-6 lg:col-span-4 flex gap-3 md:gap-5 p-2 md:p-5 ring ring-black box-border rounded-md hover:ring-primary">
                    <div className="text-5xl text-primary">
                        <FaDesktop/>
                    </div>
                    <div className="text-white">
                        <Heading className='text-xl md:text-3xl mb-3' span='Web development'/>
                        <Paragraph text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                    </div>
                </div>
                <div data-aos="zoom-out-left" className="col-span-12 md:col-span-6 lg:col-span-4  flex gap-3 md:gap-5 p-2 md:p-5 ring ring-black box-border rounded-md mx-2 md:mx-0 hover:ring-primary">
                    <div className="text-5xl text-primary">
                        <FaDesktop/>
                    </div>
                    <div className="text-white">
                        <Heading className='text-xl md:text-3xl mb-3' span='Web design'/>
                        <Paragraph text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                    </div>
                </div>
                <div data-aos="zoom-out-right" className="col-span-12 md:col-span-6 lg:col-span-4 md:mx-auto flex gap-3 md:gap-5 p-2 md:p-5 ring ring-black box-border rounded-md hover:ring-primary">
                    <div className="text-5xl text-primary">
                        <TbTargetArrow/>
                    </div>
                    <div className="text-white">
                        <Heading className='text-xl md:text-3xl mb-3' span='SEO Marketing'/>
                        <Paragraph text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                    </div>
                </div>
            </div>
        </Container>
   </section>
  )
}

export default Services