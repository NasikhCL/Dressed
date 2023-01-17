import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function ReactCarousel() {
  return (

      <Carousel className='cursor-pointer -z-10'  autoPlay showThumbs={false} centerMode={false} infiniteLoop  showStatus={false}>
        <div className=' bg-cyan-200' style={{height:"520px"}}> 
          <img className='object-cover h-full' src="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='carousel'/>
          <p className="legend">Get Dressed Well</p>
        </div>
        <div className='bg-cyan-200' style={{height:"520px"}}> 
          <img className='h-full ' src="https://images.pexels.com/photos/935789/pexels-photo-935789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='carousel' />
          <p className="legend">Save your Date</p>
        </div>
        <div className='bg-cyan-200' style={{height:"520px"}}> 
          <img className='h-full ' src="https://images.pexels.com/photos/415351/pexels-photo-415351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='carousel' />
          <p className="legend">Save your Date</p>
        </div>
        <div className='bg-cyan-200' style={{height:"520px"}}> 
          <img className='h-full ' src="https://images.pexels.com/photos/165505/pexels-photo-165505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='carousel' />
          <p className="legend">Save your Date</p>
        </div>
                
      </Carousel>

  )
}
