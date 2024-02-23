import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link'


interface iSortParams {
  sortOrder: 'name' | 'email',
  sortDirection: 'DESC' | 'ASC' | 'desc' | 'asc'

}
interface Props {
  searchParams: iSortParams,
}

const Users = ({ searchParams: { sortDirection = 'ASC', sortOrder = 'name' } }: Props) => {

  return (
    <>
      <div className='flex flex-row justify-between'>
        <h1 className='my-auto'>Users</h1>
        <Link href='/users/new'>
          <div className='btn rounded-full bg-slate-200'>

            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
          </div> 
        </Link>
      </div>

        <UserTable sortDirection={sortDirection} sortOrder={sortOrder} />
    
    </>
  )
}

export default Users