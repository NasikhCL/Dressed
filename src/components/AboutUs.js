import React from 'react'

export default function AboutUs() {
  return (
    <div  className='h-fit '>
        <h1 id='about-us' className='text-2xl font-bold mb-5 px-7 pt-16 pb-14'>About Us</h1>
        <div  className='flex  flex-col lg:flex-row justify-between items-center '>
            <div className='flex justify-center items-center w-full lg:w-2/4 mb-7'>
                <img className='w-32 md:w-64' src='https://cdn.shopify.com/s/files/1/0609/2102/0609/files/grp_image_2_750x.jpg?v=1650647980' />
                <img className='w-32 md:w-64' src='https://cdn.shopify.com/s/files/1/0609/2102/0609/files/ganesh_1_540x.jpg?v=1650647967' />
            </div>
            <div className='lg:w-2/4 flex flex-col   justify-between items-center px-7 lg:px-14'>
                <h2 className='mb-4 text-3xl font-bold italic text-center '>MINIMALIST FASHION</h2>
                <p className='text-center text-gray-800 mb-7'>Reminding you that fashion doesn’t have to be rare and unorthodox clothing apparels. Stay chic with our classic, elegant, and rich collection of men’s wear. We implicit fashion through Simplicity. </p>
                <p className='text-center text-gray-800 mb-7'>To all the dedicated Tones enthusiasts,We are grateful for your constant support. It is because of you all that we are able to provide the best men’s wear in town. Thank you.</p>
            </div>
        </div>
    </div>
  )
}
