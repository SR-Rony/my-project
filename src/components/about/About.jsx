import React, { useEffect, useState } from 'react'
import Container from '../container/Container'
import Paragraph from '../paragraph/Paragraph'
import Heading from '../heading/Heading'

const About = () => {
  const [text,setText]=useState(true)
    useEffect(()=>{
        const scroolWidth =()=>{
            if(window.innerWidth < 768){
              setText(false)
            }else{
              setText(true)
            }
        }
        scroolWidth()
        window.addEventListener("resize",scroolWidth)
    },[]);
  return (
    <section data-aos="zoom-in" id='about' className='pb-10 lg:pb-20 text-center'>
        <Container className='relative'>
          <div className="absolute -bottom-10 left-1/3 w-[400px] h-[400px] bg-primary top rounded-full blur-[200px] opacity-30 animate-pulse"></div>
              <Heading className='text-3xl md:text-5xl text-white border-b-4 border-primary pb-4 inline-block' text='About' span=' Me'/>
            <div className='mt-5 lg:mt-10 text-white'>
              <Heading className='text-xl md:text-3xl mb-7' text="I'm SR Rony, a" span=' Web Developer'/>
              <Paragraph text="I'm a passionate and highly skilled web developer with a deep appreciation for the ever-evolving digital landscape. I thrive on the creative challenges that web development presents and am dedicated to crafting exceptional online experiences that captivate and engage users.

              With a strong foundation in both front-end and back-end development, I'm equipped to handle the complete lifecycle of web projects. My expertise lies in harnessing the power of HTML, CSS, and JavaScript to create stunning and responsive user interfaces. I also excel in back-end technologies, using languages like Node js, Express js mongo DB ,Firebase, and databases build robust, secure, and efficient web applications."/>
              {text
                &&<Paragraph text="In a constantly changing field like web development, I'm dedicated to continuous learning and staying up-to-date with the latest trends, tools, and frameworks. My goal is to not only meet but exceed your web development needs, whether it's for your business, personal project, or organization.

                I thrive on collaboration and believe in the power of teamwork to bring innovative ideas to life. I'm here to help you transform your vision into a functional, visually appealing, and secure digital reality. Let's work together to create something amazing on the web."/>
              }
              {text
                ?<span onClick={()=>setText(false)} className=' md:hidden'></span>
                :<span  onClick={()=>setText(true)} className=' md:hidden text-primary cursor-pointer' >Read more...</span>
              }
            </div>
        </Container>
    </section>
  )
}

export default About