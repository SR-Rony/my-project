import React from 'react'
import Container from '../container/Container'
import Hadding from '../hadding/Hadding'

const About = () => {
  return (
    <section id='about' className='py-10'>
        <Container>
            <Hadding className='text text-5xl text-center' text='About Me'/>
        </Container>
    </section>
  )
}

export default About