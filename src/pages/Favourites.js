import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'

export default function Favourites() {

    const navigate = useNavigate()
    const [myFavs, setMyFavs] = useState([])
    const [isComplete, setIsComplete] = useState(false)

    useEffect(()=>{

      const localStorageFavCards = JSON.parse(localStorage.getItem('favCards')) || [];
      
      setMyFavs(localStorageFavCards);

      console.log(JSON.parse(localStorage.getItem('favCards')))
      
     
    },[])
  return (
    <div>
        <div className='w-full mt-4 border rounded-3xl px-7 h-14  flex justify-between items-center'>
        <div className='cursor-pointer' onClick={()=> navigate('/')}><i className="fa-solid fa-angle-left"></i></div>
        <div className='cursor-pointer' onClick={()=> navigate('/')}><i className="fa-solid fa-house"></i></div>
        
      </div> 
      <h1 className='text-2xl font-bold my-5 px-7'>My Favourites</h1>
        <div className='w-full flex flex-wrap justify-evenly items-center'>
       { isComplete ? (( myFavs && (myFavs.length !== 0) ) ? myFavs.map(item=>{  
            return ( <Card key={item.id} userData={item}/> )
        }) :  <h2>No Data Found...</h2> ) : <h2>Loading...</h2>
    }
    </div>
    </div>
  )
}
