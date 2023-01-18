import React from 'react'


export default function Card({userData}) {
 
  return (
    <div className="border rounded-lg shadow-md max-w-sm mt-7 mx-1">
        <img
            className="object-contain w-full h-48"
            src={userData.photoUrl}
            alt="user"
        />
        <div className="p-4">
            <div className='flex justify-between'>
                <h4 className="text-xl font-semibold tracking-tight text-blue-900">
                    {userData.title}
                </h4>
                <h4 className='text-gray-400'>{userData.name}</h4>
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
