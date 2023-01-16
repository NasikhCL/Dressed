import React, { useState } from 'react'

import TBC from '../images/TBC.png';
export const Navbar = () => {
    const[isHambListVisible,setIsHambListVisbile] =useState(false)
    const handleHamb =()=>{
       setIsHambListVisbile(prevState=> !prevState)
    }
  return (
    <div className={isHambListVisible ? 'bg-blue-200' : 'z-70 sticky top-0'}>

        <nav className='w-100 h-14 z-60 mb-2 px-4 lg:shadow-xl border-b-2 border-blue-100  bg-blue-200 text-blue-900 color flex items-center justify-between'>
            <div className='flex items-center '>
                <img className="w-14 h-10  mr-2 object-cover"  src={TBC} alt="logo"/>             
                <h4 className="font-bold">Lets Get Dressed</h4>
            </div>
            <ul className='flex '>
                <li className='hidden lg:block mx-5 hover:text-cyan-700 hover:scale-105 cursor-pointer'>Home</li>
                <li className='hidden lg:block mx-5 cursor-pointer hover:text-cyan-700 hover:scale-105 relative group '>
                    Category
                    <ul className='hidden z-90 group-hover:block absolute top-3 pt-5 w-[180px] left-0 group-hover:transition-all group-hover:duration-300'>
                        <li className='bg-blue-300 hover:bg-gray-200 p-2'>Marrige Dress</li>
                        <li className='bg-blue-300 hover:bg-gray-200 p-2'>Anniversary Dress</li>
                        <li className='bg-blue-300 hover:bg-gray-200 p-2'>Birthday Dress</li>
                        <li className='bg-blue-300 hover:bg-gray-200 p-2'>College Fest Dress</li>
                    </ul>
                </li>

                <li className='hidden lg:block mx-5 cursor-pointer hover:text-cyan-700 hover:scale-105'>Contact Us</li>
                <li className='hidden lg:block mx-5 cursor-pointer hover:text-cyan-700 hover:scale-105'>About Us</li>
            </ul>
            
            
            
            <div className='hidden lg:visible lg:flex items-center relative  px-2'>
                <div className='mr-5'>
                    Favourites
                </div>
                <input placeholder='Search...' className='pl-2 rounded-xl' />
                <div className='absolute right-4 cursor-pointer'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                {/* <div className='mx-5'>Register</div>
                <div className='mx-5'>Login</div>
                <div className='relative mx-5'>
                    <i class="fa-solid fa-cart-shopping text-xl"></i>
                    <div class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2.5 -right-2">10</div>
                </div>
                <img className="w-10 h-10 rounded-full mx-2" src="https://images.pexels.com/photos/14391922/pexels-photo-14391922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-profile"/> */}
            </div>
            <div onClick={handleHamb} className='lg:hidden flex items-center'>
            <i className="fa-solid fa-bars"></i>
            </div>
        </nav>
        
    
        <ul className={isHambListVisible ?'text-blue-900 pb-3 lg:hidden' : 'text-blue-900 pb-3 hidden' }>
            <li className='block px-3 my-3 hover:bg-gray-200 '>Home</li>
            <li className='block px-3 my-3 hover:bg-gray-200 '>Favourites</li>
            <li className='block px-3 my-3 hover:bg-gray-200 '>Category</li>
            <li className='block px-3 my-3 hover:bg-gray-200 '>About Us</li>
            <li className='block px-3 my-3 hover:bg-gray-200 '>Contact Us</li>
            <div className=' lg:hidden lg:flex w-fit items-center relative mx-auto py-2 '>
                    <input placeholder='Search...' className='pl-2 rounded-xl border' />
                    <div className='absolute right-4 top-2 cursor-pointer'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    
            </div>
        </ul>
    </div>
  )
}
