import React from 'react'
import Container from '../container/Container'
import Hadding from '../hadding/Hadding'
import {FaFacebookF,FaWhatsapp,FaGithub,FaLinkedinIn} from 'react-icons/fa'
import HeroImg from '../../assets/SR Rony.jpg'
import Images from '../images/Images'
import Button from '../button/Button'


const Hero = () => {
  return (
    <section className='py-60 bg-slate-900'>
        <Container>
            <div className="grid grid-cols-2 items-center">
              <div className="col-span-1">
                <div className="text-white">
                  <Hadding className='text-7xl' text='Hello! I’m ' span='SR Rony'/>
                  <Hadding className='text-4xl my-7' text='I’m'span=' Web Developer'/>
                  <div className="flex gap-5 text-3xl cursor-pointer text-primary">
                      <div className='p-3 border-2 border-primary rounded-full hover:bg-primary hover:text-white'>
                        <FaFacebookF />
                      </div>
                      <div className='p-3 border-2 border-primary rounded-full hover:bg-primary hover:text-white'>
                        <FaWhatsapp/>
                      </div>
                      <div className='p-3 border-2 border-primary rounded-full hover:bg-primary hover:text-white'>
                        <FaGithub />
                      </div>
                      <div className='p-3 border-2 border-primary rounded-full hover:bg-primary hover:text-white'>
                        <FaLinkedinIn />
                      </div>
                  </div>
                  <div className="flex mt-10">
                    <Button text='Contact Me'/>
                    <Button className='ml-7' text='Downlod CV'/>
                  </div>
                </div>
              </div>
              <div className="col-span-1 w-full grid justify-center">
                <Images className='w-96 h-96 rounded-full object-cover border-solid border-8 border-primary' src={HeroImg}/>
              </div>
            </div>
        </Container>
    </section>
  )
}

export default Hero