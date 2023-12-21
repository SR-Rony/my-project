import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Copyright from './components/copyright/Copyright'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'

function App() {

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

export default App
