import React from 'react'
import Navbar from '../components/Navbar'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='w-full'>
        <Navbar />
        <MainContent />
        <Footer />
    </div>
  )
}

export default Home