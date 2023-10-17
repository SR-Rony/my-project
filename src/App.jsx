import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Contact from './components/contact/Contact'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Contact/>
    </>
  )
}

export default App
