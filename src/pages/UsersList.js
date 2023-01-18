import React from 'react'
import { useParams } from 'react-router-dom'
import CardList from '../components/CardList'
import { Navbar } from '../components/Navbar'

export default function UsersList() {
  let params = useParams()
  // console.log(params) 

  return ( 
    <>
        <Navbar />
        <CardList gender={params.gender} categoryName={params.categoryName} />
    </>
  )
} 
