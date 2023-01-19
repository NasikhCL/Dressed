import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './react-carousel.css'
 
export default function ReactCarousel() {
  return (

      <Carousel  className='cursor-pointer -z-10 mx-auto'  autoPlay showThumbs={false} centerMode={false} infiniteLoop  showStatus={false}>
        <div id='home' className=' bg-cyan-200 overflow-hidden'  style={{height:"520px"}}> 
          <img className='zoom-in-out-box' src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt='carousel'/>
          <p className="legend">Wear it , Feel it</p>
        </div>
        <div className='bg-cyan-200 overflow-hidden' style={{height:"520px"}}> 
          <img className='zoom-in-out-box ' src="https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt='carousel' />
          <p className="legend">Run for your dreams </p>
        </div>
        <div className='bg-cyan-200 overflow-hidden' style={{height:"520px"}}> 
          <img className=' zoom-in-out-box' src="https://images.unsplash.com/photo-1529397938791-2aba4681454f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt='carousel' />
          <p className="legend">Be simple</p>
        </div>
        <div className='bg-cyan-200 overflow-hidden' style={{height:"520px"}}> 
          <img className='zoom-in-out-box ' src="https://images.unsplash.com/photo-1604958567041-fc955468b7ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt='carousel' />
          <p className="legend">Watch Carefully</p>
        </div>
        <div className='bg-cyan-200 overflow-hidden' style={{height:"520px"}}> 
          <img className='zoom-in-out-box ' src="https://images.unsplash.com/photo-1505535162959-9bbcb4ab22d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1718&q=80" alt='carousel' />
          <p className="legend">Blind Eyes</p>
        </div>
                
      </Carousel>

  )
}
