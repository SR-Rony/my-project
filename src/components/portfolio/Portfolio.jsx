import React from 'react'
import Container from '../container/Container'
import Heading from '../heading/Heading'
import hockey from '../../assets/hockey.png'
import photography from '../../assets/slider.jpg'
import fast from '../../assets/fast-jaw.png'
import linkdin from '../../assets/linkdin.jpg'
import chatting from '../../assets/chatting.jpg'
import Ecommerce from '../../assets/Ecommerce.png'
import PortfolioItem from './PortfolioItem'

const Portfolio = () => {
  return (
    <section id='portfolio' className='py-10 md:py-20'>
        <Container>
            <div className='text-center'>
                <Heading className='text-3xl md:text-5xl text-white mb-16 border-b-4 border-primary pb-4 inline-block' text='My' span=' Portfolio'/>
                <div className='grid grid-cols-12 gap-5 my-5'>
                    <div data-aos="zoom-in" className={`col-span-12 md:col-span-4 h-80 cursor-pointer relative group rounded-md overflow-hidden`}>
                        <PortfolioItem to='https://hockey-six.vercel.app/' image={hockey}/>
                    </div>
                    <div data-aos="zoom-in" className={`col-span-12 md:col-span-4 h-80 cursor-pointer relative group rounded-md overflow-hidden`}>
                        <PortfolioItem to='https://photography-b7rb.vercel.app/' image={photography}/>
                    </div>
                    <div data-aos="zoom-in" className={`col-span-12 md:col-span-4 h-80 cursor-pointer relative group rounded-md overflow-hidden`}>
                        <PortfolioItem to='https://fast-jao.vercel.app/' image={fast}/>
                    </div>
                </div>
                <div className='grid grid-cols-12 gap-5 my-5'>
                    <div data-aos="zoom-in" className={`col-span-12 md:col-span-4 h-80 cursor-pointer relative group rounded-md overflow-hidden`}>
                        <PortfolioItem to='https://linkedin-7nz6.vercel.app/' image={linkdin}/>
                    </div>
                    <div data-aos="zoom-in" className={`col-span-12 md:col-span-4 h-80 cursor-pointer relative group rounded-md overflow-hidden`}>
                        <PortfolioItem to='https://chatting-application-six.vercel.app/' image={chatting}/>
                    </div>
                    <div data-aos="zoom-in" className={`col-span-12 md:col-span-4 h-80 cursor-pointer relative group rounded-md overflow-hidden`}>
                        <PortfolioItem to='https://orebi-ecommerce-sigma.vercel.app/' image={Ecommerce}/>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Portfolio