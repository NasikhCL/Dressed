import React, { useEffect, useState } from 'react'
import Card from './Card'
import {db} from '../config/firebase'
import { collection, getDocs, where, query } from "firebase/firestore";
import { useParams } from 'react-router-dom';






export default function CardList() {
  const params = useParams()
// console.log(params)
//   const paramsGender = props.gender
  const CategoryName = params.categoryName
  
  // console.log(qGender)
   
  const [isComplete, setIsComplete] = useState(false)
  const [ourUsers, setOurUsers] = useState([])
  // console.log(ourUsers)
  
 

  useEffect(()=>{

      const fetchData = async()=>{
        setOurUsers([]) 
        const q = query(
          collection(db, "users"),
          where("gender", "==", params.gender),
          where("category", "==", params.categoryName)
        );
        const querySnapshot = await getDocs(q);
    
        querySnapshot.forEach((doc) => {
         
          setOurUsers((prevData) => [...prevData, doc.data()]);
  
          setIsComplete(true);
       ;
        });
        
    } 
    fetchData(); 
    
      console.log('fetch called')
  },[params])

    
    






  return (
    <div>
      
      <h2>{CategoryName}</h2>
      <div className='w-5/6 mx-auto flex justify-evenly flex-wrap'>
        {
          isComplete ? ourUsers.map((user,index) => {
            // console.log(user)
            return( <Card key={index} userData={user} /> )
          })
          : <h1>Loading ...</h1>
        }
    </div>
  </div>
  )
}
