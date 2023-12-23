import React from 'react'
import Container from '../container/Container'
import Heading from '../heading/Heading'
import Paragraph from '../paragraph/Paragraph'
import { FaDesktop } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";


const Services = () => {
  return (
   <section className='py-10 md:py-20'>
        <Container>
            <div className='text-center'>
                <Heading className='text-3xl md:text-5xl text-white mb-16 border-b-4 border-primary pb-4 inline-block' text='My' span=' Services'/>
            </div>
            <div className="grid grid-cols-3 gap-5">
                <div className="col-span-3 md:col-span-1 flex gap-3 md:gap-5 p-2 md:p-5 ring ring-black box-border hover:ring-primary">
                    <div className="text-5xl text-primary">
                        <FaDesktop/>
                    </div>
                    <div className="text-white">
                        <Heading className='text-xl md:text-3xl mb-3' span='Web development'/>
                        <Paragraph text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                    </div>
                </div>
                <div className="col-span-3 md:col-span-1 flex gap-3 md:gap-5 p-2 md:p-5 ring ring-black box-border mx-2 md:mx-0 hover:ring-primary">
                    <div className="text-5xl text-primary">
                        <FaDesktop/>
                    </div>
                    <div className="text-white">
                        <Heading className='text-xl md:text-3xl mb-3' span='Web design'/>
                        <Paragraph text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                    </div>
                </div>
                <div className="col-span-3 md:col-span-1 flex gap-3 md:gap-5 p-2 md:p-5 ring ring-black box-border hover:ring-primary">
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