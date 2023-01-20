import React, { useEffect, useState } from 'react'


export default function Card({userData}) {

    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
      const localStorageFavCards = JSON.parse(localStorage.getItem('favCards')) || [];
      const isCardFav = localStorageFavCards.find(card => card.id === userData.id);
      if (isCardFav) {
        setIsFav(true);
      }
    },[]);
  
    const handleFavClick = () => {
      setIsFav(!isFav);
    }
  
    useEffect(() => {
      const localStorageFavCards = JSON.parse(localStorage.getItem('favCards')) || [];
      if (isFav) {
        localStorageFavCards.push(userData);
        localStorage.setItem('favCards', JSON.stringify(localStorageFavCards));
      } else {
        const updatedFavCards = localStorageFavCards.filter(card => card.id !== userData.id);
        localStorage.setItem('favCards', JSON.stringify(updatedFavCards));
      }
    }, [isFav]);



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
                    {userData.title.charAt(0).toUpperCase() +userData.title.slice(1)}
                </h4>
                <button onClick={handleFavClick}>
                    {isFav ? <h4 className='text-red-500 text-2xl cursor-pointer'><i className="fa-solid fa-heart"></i></h4> : <h4 className='text-gray-400 text-2xl cursor-pointer'><i className="fa-regular fa-heart"></i></h4>}
                </button>
              </div>
            <p className="mb-2 leading-normal">
               {userData.description.charAt(0).toUpperCase() + userData.description.slice(1)}
            </p>
           
        </div>
    </div>
  )
}
