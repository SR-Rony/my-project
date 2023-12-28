import React from 'react'
import Container from '../container/Container'
import {FaFacebookF,FaWhatsapp,FaGithub,FaLinkedinIn} from 'react-icons/fa'
import HeroImg from '../../assets/SR Rony.jpg'
import Images from '../images/Images'
import Button from '../button/Button'
import Heading from '../heading/Heading'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <section id='home' className='pt-32 pb-20 lg:py-60'>
        <Container>
            <div className="grid grid-cols-2 items-center">
              <div className="col-span-2 order-2 lg:order-1 lg:col-span-1">
                <div className="text-white text-center lg:text-start">
                  <Heading className='text-6xl lg:text-start lg:text-7xl' text='Hello! I’m ' span='SR Rony'/>
                  <Heading className='text-2xl md:text-4xl my-3 md:my-7' text='I’m'span=' Web Developer'/>
                  <div className="flex gap-5 text-xl justify-center lg:justify-start items-center lg:text-3xl cursor-pointer text-primary">
                      <div className='p-3 border-2 border-primary rounded-full hover:bg-primary hover:text-white'>
                        <Link to='https://www.facebook.com/hdrony.hdrony'><FaFacebookF /></Link>
                      </div>
                      <div className='p-3 border-2 border-primary rounded-full hover:bg-primary hover:text-white'>
                        <Link to='https://wa.me/01743493707'><FaWhatsapp/></Link>
                      </div>
                      <div className='p-3 border-2 border-primary rounded-full hover:bg-primary hover:text-white'>
                        <Link to='https://github.com/SR-Rony'><FaGithub /></Link>
                      </div>
                      <div className='p-3 border-2 border-primary rounded-full hover:bg-primary hover:text-white'>
                        <Link to='https://www.linkedin.com/in/sr-rony'><FaLinkedinIn /></Link>
                      </div>
                  </div>
                  <div className="flex gap-5 justify-center lg:justify-start mt-5 md:mt-10">
                    <Button text='Contact Me'/>
                    <Button text='Downlod CV'/>
                  </div>
                </div>
              </div>
              <div className="col-span-2 order-1 lg:order-2 mb-5 lg:mb-0  lg:col-span-1 w-full grid justify-center">
                <Images className='w-52 h-52 lg:h-96 lg:w-96 rounded-full ring-4  lg:ring-8 ring-primary' src={HeroImg}/>
              </div>
            </div>
        </Container>
    </section>
  )
}

export default Hero