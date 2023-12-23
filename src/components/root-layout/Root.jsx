import React from 'react'
import Navbar from '../navbar/Navbar'
import About from '../about/About'
import Hero from '../hero/Hero'
import Services from '../services/Services'
import Portfolio from '../portfolio/Portfolio'
import Copyright from '../copyright/Copyright'
import Contact from '../contact/Contact'

const Root = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <Portfolio/>
        <Contact/>
        <Copyright/>

    </>
  )
}

export default Root