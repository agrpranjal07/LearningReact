import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <h1 className='flex font-bold justify-center text-5xl text-green-500 m-10'>User:{userid} </h1>
  )
}

export default User