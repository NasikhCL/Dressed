import React from 'react'

export default function JoinUs() {
  return (
    <div className='w-full h-60 text-white bg-black py-14'>
        <div className='w-fit mx-auto justify-center items-center flex flex-col  relative'>
            <h2 className='text-2xl font-medium  tracking-wider'>Join the Club</h2>
            <input type='text' className='bg-transparent border-b-2 placeholder-white outline-none mt-7 pb-2 text-base w-[240px] md:w-[300px]' placeholder='Enter your email'/>
            <div className='absolute bottom-2 right-0 text-xl '><i className="fa-regular fa-envelope"></i></div>
        </div>
    </div>
  )
}
