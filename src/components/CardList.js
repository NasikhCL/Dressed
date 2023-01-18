import React, { useEffect, useState } from 'react'
import Card from './Card'
import {db} from '../config/firebase'
import { collection, getDocs, where, query } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';





export default function CardList() {
  const params = useParams()
  const navigate = useNavigate() 
// console.log(params)
//   const paramsGender = props.gender
  const CategoryName = params.categoryName
  
  console.log(params)
   
  const [isComplete, setIsComplete] = useState(false)
  const [ourUsers, setOurUsers] = useState([])
  // console.log(ourUsers)
  let q = null;
  if(params.searchQuery){
    let search = '*'+params.searchQuery+'*'
    console.log(search)
    //  q = query(
      q = collection(db, "users")
      // where("title", ">=", params.searchQuery),where("title", "<=", params.searchQuery+'\uf8ff' )
      // where("title", "==",  params.searchQuery)  
    // );
    // db.get().collection(collection.PRODUCT_COLLECTION).find({Name: {$regex: pname}}).toArray();
  }else{ 
   q = query(
    collection(db, "users"),
    where("gender", "==", params.gender),
    where("category", "==", params.categoryName)
  );
  }

  useEffect(()=>{

      const fetchData = async()=>{
        setOurUsers([]) 
        
        const querySnapshot = await getDocs(q);
    
        querySnapshot.forEach((doc) => {
          if(params.searchQuery){ 
            if(doc.data().title.includes(params.searchQuery.toLocaleLowerCase())){
              setOurUsers((prevData) => [...prevData, doc.data()]);
            }

          }else{
         
          setOurUsers((prevData) => [...prevData, doc.data()]);
  
        }
          setIsComplete(true);
        });
        
    } 
    fetchData(); 
    
      console.log('fetch called')
  },[params])

    
    






  return (
    <div>
      <div className='w-full mt-4 border rounded-3xl px-7 h-14  flex justify-between items-center'>
        <div onClick={()=> navigate('/')}><i class="fa-solid fa-house"></i></div>
        <div>filter</div>
        <div>right</div>
      </div>
      
      <h2 className='ml-7 mt-7 text-2xl '>{CategoryName ? `${CategoryName}` : 'Search Results' }</h2>
      <div className='w-5/6 mx-auto flex justify-evenly flex-wrap'>
        {
          isComplete ?(ourUsers.length>0 ? ourUsers.map((user,index) => {
            // console.log(user)
            return( <Card key={index} userData={user} /> )
          }) : <h1>No Results Found ...</h1>
          ): <h1>Loading ...</h1>
        }
    </div>
  </div>
  )
}
