import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Mail from '../components/Mail'
import Footer from '../components/Footer'


const Homepage = () => {
  return (
    <div className='bg-[#00302E] h-auto'>
      <Navbar  />
      <Hero />
      <Features />
      <Mail />
      <Footer />
      
    </div>
  )
}

export default Homepage
