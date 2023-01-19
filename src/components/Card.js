import React, { useEffect, useState } from 'react'


export default function Card({userData}) {
    const [favList , setFavList] = useState([])
    // let oldItems = JSON.parse(localStorage.getItem('favDressArr')) || [];
    useEffect(()=>{
        const localStorageFavDresses = localStorage.getItem('favDresses');
        if(localStorageFavDresses && JSON.parse(localStorageFavDresses) !== favList){
            setFavList( JSON.parse(localStorageFavDresses)) 
        }  else if (!localStorageFavDresses) {
            setFavList([]);
          } 
        
    },[])
    useEffect(() => {
        if (favList.length > 0) {
        localStorage.setItem('favDresses', JSON.stringify(favList));
        }
      }, [favList]);

    const addToFav =()=>{
        // console.log('added to fav ')
        // if(favList.some(item=> item.id === userData.id)){
        //     console.log('item alredy exist in fav')
        // }else{
            setFavList([...favList, userData]);
            console.log('item added to fav')
            // const updatedList = [...favList, userData];
            // localStorage.setItem('favDressArr', JSON.stringify(updatedList));
            // setFavList(updatedList)
        // }
    }
    const removeFromFav =()=>{
        const filteredItems = favList.filter(item => item.id !== userData.id)
            setFavList(filteredItems)
        
        //    console.log('item removed') 
        //     localStorage.setItem('favDressArr', JSON.stringify(favList));
        
    }
 
  return (
    <div className="border rounded-lg shadow-md max-w-sm mt-7 mx-1 ">
        <div className='h-96'>
            <img
                className="object-contain w-full h-full shadow-xl"
                src={userData.photoUrl}
                alt="user"
                />
        </div>
        <div className="p-4">
            <div className='flex justify-between'>
                <h4 className="text-xl font-semibold tracking-tight text-blue-900">
                    {userData.title}
                </h4>{ favList.some(item=> item.id === userData.id)   ? <h4 className='text-red-500 text-2xl cursor-pointer' onClick={removeFromFav}><i className="fa-solid fa-heart"></i></h4>
                    : <h4 className='text-gray-400 text-2xl cursor-pointer' onClick={addToFav}><i className="fa-regular fa-heart"></i></h4>

                }
                </div>
            <p className="mb-2 leading-normal">
               {userData.description}
            </p>
            {/* <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                View
            </button> */}
        </div>
    </div>
  )
}
