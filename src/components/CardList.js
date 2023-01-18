import React, { useEffect, useState } from 'react'
import Card from './Card'
import {db} from '../config/firebase'
import { collection, getDocs, where, query } from "firebase/firestore";






export default function CardList(props) {

  const qGender = props.gender
  console.log(qGender)
   
  const [isComplete, setIsComplete] = useState(false)
  const [ourUsers, setOurUsers] = useState([])
  // console.log(ourUsers)
  
  const fetchData = async()=>{
      const q = query(collection(db, "users"), where("gender", "==", qGender));
      const querySnapshot = await getDocs(q) 
      // console.log(querySnapshot)
      querySnapshot.forEach((doc) => {
        // console.log(doc.data())
          setOurUsers(prevData=> [...prevData, doc.data()])
          
          setIsComplete(true)
          // console.log(querySnapshot)
        // doc.data() is never undefined for query doc snapshots
        // console.log( doc.data());
      });
      
  }

  useEffect(()=>{

      fetchData();
    
      console.log('fetch called')
  },[])

    
 






  return (
    <div className='5/6 flex justify-evenly flex-wrap'>
      {
        isComplete ? ourUsers.map((user,index) => {
          // console.log(user)
          return( <Card key={index} userData={user} /> )
        })
     : <h1>Loading ...</h1>
      }
     
        
    </div>
  )
}
