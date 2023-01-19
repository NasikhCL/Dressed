import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'

export default function Favourites() {
    let localData = JSON.parse(localStorage.getItem('favDresses'))
    const navigate = useNavigate()
    const [myFavs, setMyFavs] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=>{
        setMyFavs(JSON.parse(localStorage.getItem('favDresses')) )
        setIsLoaded(true)
    },[])
  return (
    <div>
        <div className='w-full mt-4 border rounded-3xl px-7 h-14  flex justify-between items-center'>
        <div className='cursor-pointer' onClick={()=> navigate('/')}><i className="fa-solid fa-angle-left"></i></div>
        <div className='cursor-pointer' onClick={()=> navigate('/')}><i className="fa-solid fa-house"></i></div>
        {/* <div className='cursor-pointer' onClick={()=> navigate('/favourites')}><i className="fa-regular fa-heart"></i></div> */}
      </div>
        <h1>My Favourites</h1>
        <div className='w-full flex flex-wrap justify-evenly items-center'>
       { isLoaded ? ( myFavs ? myFavs.map(item=>{  
            return ( <Card key={item.id} userData={item}/> )
        }) :  <h2>No Data Found...</h2> ) : <h2>Loading...</h2>
    }
    </div>
    </div>
  )
}
