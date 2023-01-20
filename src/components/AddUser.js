import React, { useState } from 'react'
import {db} from '../config/firebase'
import { 
  collection,
  addDoc
} from 'firebase/firestore'
import { toast } from 'react-toastify';

 

export default function AddUser() { 

  const [title, setTitle] = useState('');
  const [id, setId] = useState(crypto.getRandomValues(new Uint32Array(1))[0]);
  const [description, setDescription] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [ gender, setGender] = useState('choose-gender')
  const [category, setCategory] = useState('choose-category')

  const handleSubmit = async(e) => {
    e.preventDefault()
   
    // Send form data to the server
    
        // userDatas.forEach( async(user) => {

            try {
                
                if (!title || !description || !photoUrl) {
                    
                    toast.error('please fill all fields')
                    return;
                  }
                  if(category === 'choose-category' || gender === 'choose-gender' ){
                    toast.error('please choose a category and gender')
                    return;
                  }

//adding data to the firebase firestore

                const docRef = await addDoc(collection(db, "users"), {id, title, description, photoUrl});
                console.log("Document written with ID: ", docRef.id);
                setTitle('')
                setId(crypto.getRandomValues(new Uint32Array(1))[0]);
                setDescription('')
                setPhotoUrl('')
                setCategory('choose-category')
                setGender('choose-gender')
                toast.success('outfit added sucessfully')
            } catch (e) {
                console.error("Error adding document: ", e);
            }

  }

  return (
    <form className='p-7 sm:p-14 bg-gray-300  rounded flex flex-col justify-start items-center' onSubmit={handleSubmit}>
            <h1 className='text-2xl font-bold text-blue-900 mb-7'>Add New Outfit</h1>
        <div className=' flex flex-col flex-wrap justify-evenly '>
          <input className=' outline-none rounded pl-1 mb-4'   type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder='title' />
          <select className=' outline-none rounded pl-1 mb-4'  value={category} onChange={(e)=> setCategory(e.target.value)}>
          <option  value='choose-category'>choose category</option>
            <option  value='marrige-outfit'>marrige-outfit</option>
            <option  value='anniversary-outfit'>anniversary-outfit</option>
            <option  value='birthday-outfit'>birthday-outfit</option> 
            <option  value='college-fest-outfit'>college-fest-outfit</option>
          </select>
          <select className=' outline-none rounded pl-1 mb-4'  value={gender} onChange={(e)=> setGender(e.target.value)}>
            <option  value='choose-gender'>choose gender</option>
            <option  value='male'>male</option>
            <option  value='female'>female</option>
          </select>
          <textarea className=' outline-none rounded pl-1 mb-4'  value={description} onChange={e => setDescription(e.target.value)} placeholder='description' />
          <input className=' outline-none rounded pl-1 mb-4'  type="text" value={photoUrl} onChange={e => setPhotoUrl(e.target.value)} placeholder='photo Url' />

        </div>
        
        <button className='px-4 py-1 bg-blue-900 text-white rounded-xl mb-4 hover:bg-blue-800'>Submit</button>
        <p className='text-sm text-red-700'>*please verify all the details before submit</p>
        </form>
 
    
  )
}
