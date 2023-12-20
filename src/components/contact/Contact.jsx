import React from 'react'
import Container from '../container/Container'
import Button from '../button/Button'
import Heading from '../heading/Heading'
import { MdLocationPin,MdOutlineMarkEmailRead  } from "react-icons/md";
import { FaPhoneAlt,FaFacebookF,FaWhatsapp,FaGithub,FaLinkedinIn  } from "react-icons/fa";
import Paragraph from '../paragraph/Paragraph';

const Contact = () => {
  return (
    <div className=' py-20'>
        <Container>
            <div className='text-center'>
                <Heading className='text-5xl text-white mb-16 border-b-4 border-primary pb-4 inline-block' text='Contact' span=' Me !'/>
            </div>
            <div className="grid grid-cols-3 gap-5">
                <div className="col-span-1">
                    <Heading className='text-3xl text-white mb-5' text='Address'/>
                    <div className='flex gap-3 items-center my-3'>
                        <div className='text-primary text-2xl p-2 ring-1 ring-primary rounded-full inline-block hover:text-white hover:bg-primary cursor-pointer'>
                        <MdLocationPin/>
                        </div>
                        <Paragraph className='text-white' text='Dhaka Bangladesh'/>
                    </div>
                    <div className='flex gap-3 items-center my-3'>
                        <div className='text-primary text-2xl p-2 ring-1 ring-primary rounded-full inline-block hover:text-white hover:bg-primary cursor-pointer'>
                            <MdOutlineMarkEmailRead/>
                        </div>
                        <Paragraph className='text-white' text='srrony707@gmail.com'/>
                    </div>
                    <div className='flex gap-3 items-center my-3'>
                        <div className='text-primary p-3 ring-1 ring-primary rounded-full inline-block hover:text-white hover:bg-primary cursor-pointer'>
                            <FaPhoneAlt className=''/>
                        </div>
                        <Paragraph className='text-white' text='(+880) 01716236314'/>
                    </div>
                    <Heading className='text-2xl text-white my-5' text='Follow me'/>
                    <div className='flex gap-3'>
                        <div className='text-primary text-2xl p-2 ring-1 ring-primary rounded-full inline-block hover:text-white hover:bg-primary cursor-pointer'>
                            <FaFacebookF/>
                        </div>
                        <div className='text-primary text-2xl p-2 ring-1 ring-primary rounded-full inline-block hover:text-white hover:bg-primary cursor-pointer'>
                            <FaWhatsapp />
                        </div>
                        <div className='text-primary text-2xl p-2 ring-1 ring-primary rounded-full inline-block hover:text-white hover:bg-primary cursor-pointer'>
                            <FaGithub />
                        </div>
                        <div className='text-primary text-2xl p-2 ring-1 ring-primary rounded-full inline-block hover:text-white hover:bg-primary cursor-pointer'>
                            <FaLinkedinIn />
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <Heading className='text-3xl text-white mb-5' text='Send us a note'/>
                    <form className='text-white text-xl' action="">
                            <div className='flex mb-7 gap-5'>
                                <input className='px-5 py-5 ring-primary ring bg-transparent  w-1/2' type="text" name='name' placeholder='Full Name' />
                                <input className='px-5 py-5 ring-primary ring bg-transparent  w-1/2' type="text" name='name' placeholder='Email Address' />
                            </div>
                            <textarea className='w-full bg-transparent p-5 h-52 ring ring-primary' name="textarea" placeholder='Tell us more about your needs ...'></textarea>
                            <div className='text-center mt-5'>
                                <Button text='Send Message'/>
                            </div>
                        </form>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Contact