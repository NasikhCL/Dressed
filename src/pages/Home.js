import React from 'react'
import ReactCarousel from '../components/ReactCarousel'
import { Navbar } from '../components/Navbar'
import Category from '../components/Category'
import Footer from '../components/Footer'
import JoinUs from '../components/JoinUs'
import AboutUs from '../components/AboutUs'






export default function Home() {
  return (
    <div className=''>
        <Navbar />
        <ReactCarousel />
        <Category />
        <AboutUs />
        <JoinUs />
        <Footer />
        {/* <div className='w-full h-[900px] bg-blue-900'></div> */}
      

        
       
    </div>
  ) 
}
