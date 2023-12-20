import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Resume from './components/resume/Resume'
import Copyright from './components/copyright/Copyright'
import Portfolio from './components/portfolio/Portfolio'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Resume/>
      <Contact/>
      <Copyright/>
    </>
  )
}

export default App
