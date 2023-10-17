import React from 'react'
import Container from '../container/Container'
import Hadding from '../hadding/Hadding'
import Paragraph from '../paragraph/Paragraph'

const About = () => {
  return (
    <section id='about' className='py-10 bg-slate-900 text-center'>
        <Container>
              <Hadding className='text-5xl text-white' text='About' span=' Me'/>
            <div className='mt-10 text-white'>
              <Hadding className='text-3xl mb-7' text='Web Developer'/>
              <Paragraph text="I'm a passionate and highly skilled web developer with a deep appreciation for the ever-evolving digital landscape. I thrive on the creative challenges that web development presents and am dedicated to crafting exceptional online experiences that captivate and engage users.

                With a strong foundation in both front-end and back-end development, I'm equipped to handle the complete lifecycle of web projects. My expertise lies in harnessing the power of HTML, CSS, and JavaScript to create stunning and responsive user interfaces. I also excel in back-end technologies, using languages like Node js, Express js mongo DB ,Firebase, and databases build robust, secure, and efficient web applications.

                In a constantly changing field like web development, I'm dedicated to continuous learning and staying up-to-date with the latest trends, tools, and frameworks. My goal is to not only meet but exceed your web development needs, whether it's for your business, personal project, or organization.

                I thrive on collaboration and believe in the power of teamwork to bring innovative ideas to life. I'm here to help you transform your vision into a functional, visually appealing, and secure digital reality. Let's work together to create something amazing on the web."/>
            </div>
        </Container>
    </section>
  )
}

export default About