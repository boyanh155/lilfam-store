'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const NewUserPage = () => {
  const router = useRouter()
  return (
    <div>
      <button onClick={()=>{
        router.push('/users')
      }} className='btn btn-block'>Create</button>
    </div>
  )
}

export default NewUserPage