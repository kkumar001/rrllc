import React from 'react'
import Navbar from '../components/Navbar'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'
import Signup from '../components/Signup'

const Home = () => {
  return (
    <div className='w-full'>
        <Navbar />
        <MainContent />
        <Signup />
        <Footer />
    </div>
  )
}

export default Home