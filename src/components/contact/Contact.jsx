import React from 'react'
import Container from '../container/Container'
import Hadding from '../hadding/Hadding'
import Button from '../button/Button'

const Contact = () => {
  return (
    <div className='bg-slate-900 py-20'>
        <Container>
            <Hadding className='text-center text-5xl text-white' text='Contact' span=' Me !'/>
            <div className=' mt-20 w-1/2 mx-auto'>
                <form className='text-white text-xl' action="">
                    <div className='flex mt-10 gap-x-5'>
                        <input className='px-5 py-5 ring-primary ring bg-transparent  w-1/2' type="text" name='name' placeholder='Full Name' />
                        <input className='px-5 py-5 ring-primary ring bg-transparent  w-1/2' type="text" name='name' placeholder='Email Address' />
                    </div>
                    <div className='flex my-7 gap-5'>
                        <input className='px-5 py-5 ring-primary ring bg-transparent  w-1/2' type="text" name='name' placeholder='Full Name' />
                        <input className='px-5 py-5 ring-primary ring bg-transparent  w-1/2' type="text" name='name' placeholder='Email Address' />
                    </div>
                    <textarea className='w-full bg-transparent p-5 h-80 ring ring-primary' name="textarea" placeholder='Your Message'></textarea>
                    <div className='text-center mt-10'>
                        <Button text='Submit'/>
                    </div>
                </form>
            </div>
        </Container>
    </div>
  )
}

export default Contact