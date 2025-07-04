import React, { useRef } from 'react'
import Container from '../container/Container'
import Button from '../button/Button'
import Heading from '../heading/Heading'
import { MdLocationPin,MdOutlineMarkEmailRead  } from "react-icons/md";
import { FaPhoneAlt,FaFacebookF,FaWhatsapp,FaGithub,FaLinkedinIn  } from "react-icons/fa";
import Paragraph from '../paragraph/Paragraph';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_if8mjs9', 'template_35iey9q', form.current, {
        publicKey: 'gtcNriQF9jeNq3Fig',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div id='contact' className='py-10 md:py-20'>
    <Container>
    <div className='text-center'>
        <Heading className='text-3xl md:text-5xl text-white mb-16 border-b-4 border-primary pb-4 inline-block' text='Contact' span=' Me !'/>
    </div>
    <div className="grid grid-cols-3 gap-5">
        <div className="col-span-3 md:col-span-1">
            <Heading className='text-xl md:text-3xl text-white mb-5' text='Address'/>
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
                <Link target="_blank" to='https://www.facebook.com/hdrony.hdrony'><FaFacebookF /></Link>
                </div>
                <div className='text-primary text-2xl p-2 ring-1 ring-primary rounded-full inline-block hover:text-white hover:bg-primary cursor-pointer'>
                <Link target="_blank" to='https://api.whatsapp.com/message/PYILMNVFCEGLF1?autoload=1&app_absent=0'><FaWhatsapp/></Link>
                </div>
                <div className='text-primary text-2xl p-2 ring-1 ring-primary rounded-full inline-block hover:text-white hover:bg-primary cursor-pointer'>
                    <Link target="_blank" to='https://github.com/SR-Rony'><FaGithub /></Link>
                </div>
                <div className='text-primary text-2xl p-2 ring-1 ring-primary rounded-full inline-block hover:text-white hover:bg-primary cursor-pointer'>
                <Link target="_blank" to='https://www.linkedin.com/in/sr-rony'><FaLinkedinIn /></Link>
                </div>
            </div>
        </div>
        <div className="col-span-3 md:col-span-2">
            <Heading className='text-xl md:text-3xl text-white mb-5' text='Send us a note'/>
            <form ref={form} onSubmit={sendEmail} className='text-white text-base md:text-xl' action="">
                    <div className='flex mb-4 md:mb-7 gap-3 md:gap-5'>
                        <input className='p-2 md:p-5 ring-primary ring bg-transparent rounded-md  w-1/2' type="text" name="user_name" placeholder='Full Name' />
                        <input className='p-2 md:p-5 ring-primary ring bg-transparent rounded-md  w-1/2' type="text" name="user_email" placeholder='Email Address' />
                    </div>
                    <textarea className='w-full bg-transparent p-2 md:p-5 h-32 md:h-52 ring rounded-md ring-primary' name="message"  placeholder='Tell us more about your needs ...'></textarea>
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