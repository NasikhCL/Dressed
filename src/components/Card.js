import React from 'react'

export default function Card() {
  return (
    <div className="border rounded-lg shadow-md max-w-sm mt-7 mx-1">
        <img
            className="object-contain w-full h-48"
            src="https://images.pexels.com/photos/3734847/pexels-photo-3734847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="user"
        />
        <div className="p-4">
            <div className='flex justify-between'>
                <h4 className="text-xl font-semibold tracking-tight text-blue-900">
                    Sourav Singh
                </h4>
                <h4 className='text-gray-400'>24yrs</h4>
            </div>
            <p className="mb-2 leading-normal">
                I love to be well dressed all the time.
                a formal  dress along with blazzer which make me look classy
            </p>
            {/* <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                View
            </button> */}
        </div>
    </div>
  )
}
