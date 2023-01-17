import React from 'react'
import ReactCarousel from '../components/ReactCarousel'
import { Navbar } from '../components/Navbar'
import Category from '../components/Category'
import Footer from '../components/Footer'






export default function Home() {
  return (
    <div className=''>
        <Navbar />
        <ReactCarousel />
        <Category />
        <Footer />
        {/* <div className='w-full h-[900px] bg-blue-900'></div> */}
      

        
       
    </div>
  ) 
}
