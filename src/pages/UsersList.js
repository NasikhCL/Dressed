import React from 'react'
import { useParams } from 'react-router-dom'
import CardList from '../components/CardList'

export default function UsersList() {
  let params = useParams()
  // console.log(params)

  return ( 
        <CardList gender={params.gender} categoryName={params.categoryName} />
  )
} 
