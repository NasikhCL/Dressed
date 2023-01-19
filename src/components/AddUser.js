import React, { useState } from 'react'
import {db} from '../config/firebase'

import { 
    collection,
    addDoc
} from 'firebase/firestore'

 

export default function AddUser() { 

  const [title, setTitle] = useState('');
  const [id, setId] = useState(crypto.getRandomValues(new Uint32Array(1))[0]);
  const [description, setDescription] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault()
   
    // Send form data to the server or handle form data
    
        // userDatas.forEach( async(user) => {

            try {
                
                if (!title || !description || !photoUrl) {
                    alert("All fields are required");
                    return;
                  }


                const docRef = await addDoc(collection(db, "users"), {id, title, description, photoUrl});
                console.log("Document written with ID: ", docRef.id);
                setTitle('')
                setId(crypto.getRandomValues(new Uint32Array(1))[0]);
                setDescription('')
                setPhotoUrl('')
            } catch (e) {
                console.error("Error adding document: ", e);
            }


        // })

    // }

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input className='border'  required type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <br />

      <label>
        Description:
        <textarea className='border' required value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <br />
      <label>
        Photo URL:
        <input className='border' required type="text" value={photoUrl} onChange={e => setPhotoUrl(e.target.value)} />
      </label>
      <br />
      <input className='border px-3 py-2 bg-blue-500 text-white cursor-pointer' type="submit" value="Submit" />
    </form>
    
  )
}
