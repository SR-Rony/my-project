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
    <section id='home' className='pt-32 pb-20 md:py-60'>
        <Container>
            <div className="grid grid-cols-2 items-center">
              <div className="col-span-2 order-2 md:order-1 md:col-span-1">
                <div className="text-white text-center md:text-start">
                  <Heading className='text-6xl md:text-start md:text-7xl' text='Hello! I’m ' span='SR Rony'/>
                  <Heading className='text-2xl md:text-4xl my-3 md:my-7' text='I’m'span=' Web Developer'/>
                  <div className="flex gap-5 text-xl justify-center md:justify-start items-center md:text-3xl cursor-pointer text-primary">
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
                  <div className="flex gap-5 justify-center md:justify-start mt-5 md:mt-10">
                    <Button text='Contact Me'/>
                    <Button text='Downlod CV'/>
                  </div>
                </div>
              </div>
              <div className="col-span-2 order-1 md:order-2 mb-5 md:mb-0  md:col-span-1 w-full grid justify-center">
                <Images className='w-52 h-52 md:h-96 md:w-96 rounded-full ring-4  md:ring-8 ring-primary' src={HeroImg}/>
              </div>
            </div>
        </Container>
    </section>
  )
}

export default Hero