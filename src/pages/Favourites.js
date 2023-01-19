import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'

export default function Favourites() {
    const navigate = useNavigate()
    const [myFavs, setMyFavs] = useState([])
    useState(()=>{
        setMyFavs(JSON.parse(localStorage.getItem('favDresses')) )
    })
  return (
    <div>
        <div className='w-full mt-4 border rounded-3xl px-7 h-14  flex justify-between items-center'>
        <div className='cursor-pointer' onClick={()=> navigate('/')}><i className="fa-solid fa-angle-left"></i></div>
        <div className='cursor-pointer' onClick={()=> navigate('/')}><i className="fa-solid fa-house"></i></div>
        <div>right</div>
      </div>
        <h1>My Favourites</h1>
        <div className='w-full flex flex-wrap justify-evenly items-center'>
       { myFavs ? myFavs.map(item=>{  
            return ( <Card key={item.id} userData={item}/> )
        }) : <h2>Loading...</h2>
    }
    </div>
    </div>
  )
}
