import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './react-carousel.css'
 
export default function ReactCarousel() {
  return (
    <div id='home'>
      <Carousel  className='cursor-pointer -z-10 mx-auto' interval={5000}  autoPlay showThumbs={false} centerMode={false} infiniteLoop  showStatus={false}>
        <div  className='bg-cyan-200 overflow-hidden zoom-in-out-box' > 
          <img className=' ' src="https://images.pexels.com/photos/1496647/pexels-photo-1496647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='carousel' />
          <p className="legend">Blind Eyes</p>
        </div>
        <div  className=' bg-cyan-200 overflow-hidden zoom-in-out-box'  > 
          <img className='' src="https://cdn.shopify.com/s/files/1/0609/2102/0609/files/1920x1080_grp1_2808x.jpg?v=1650648080" alt='carousel'/>
          <p className="legend">Wear it , Feel it</p>
        </div>
        <div className='bg-cyan-200 overflow-hidden zoom-in-out-box' > 
          <img className=' ' src="https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='carousel' />
          <p className="legend">Modern  </p>
        </div>
        <div className='bg-cyan-200 overflow-hidden zoom-in-out-box'> 
          <img className=' ' src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='carousel' />
          <p className="legend">Be simple</p>
        </div>
        <div className='bg-cyan-200 overflow-hidden zoom-in-out-box' > 
          <img className=' ' src="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='carousel' />
          <p className="legend">Watch Carefully</p>
        </div>
                
      </Carousel>
    </div>

  )
}
