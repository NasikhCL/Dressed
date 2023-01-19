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
                <h2 className='mb-4 text-3xl font-bold italic text-center '>TEAM ALPHA</h2>
                <p className='text-center text-gray-800 mb-7'>We are a Team of Students who aim at creating a better future with the help of computer science and technology </p>
                <p className='text-center text-gray-800 mb-7'>Our mission is to provide a convenient and user-friendly platform for users to discover and explore new fashion trends and styles. We are keep on trying to increase our database with a huge load of outfit collections. now the website is at alpha stage. sorry for any inconvinence you face while using our website. please let us know where you got the trouble. we are here to help you</p>
            <div className='bg-black text-white rounded-md text-center px-3 py-2 cursor-pointer mb-4'> Contact Us</div>
            </div>
        </div>
    </div>
  )
}
