// import { useRouter } from 'next/navigation'
import Link from 'next/link'
import React, { useState } from 'react'


interface Props {
    sortOrder: string,
    sortDirection: string
}
function compareFunction(a: number | string, b: number | string, sortDirection: string = 'ASC'): number | undefined {

    if (typeof a === 'string' && typeof b === 'string') {
        if (sortDirection === 'ASC') {
            return a > b ? 1 : a < b ? -1 : 0
        } else {
            return a < b ? 1 : a > b ? -1 : 0
        }
    } else if (typeof a === 'number' && typeof b === 'number') {
        if (sortDirection === 'ASC') {
            return a - b
        } else {
            return b - a
        }
    }

}

// sort
const UserTable = async ({ sortDirection, sortOrder }: Props) => {
    // const router = useRouter()
    const apiResult = await fetch(`https://jsonplaceholder.typicode.com/users`, {
        cache: 'no-store'
    })
    const users: UserType[] = await apiResult.json()
    return (
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th
                    >
                        <Link href={`users?sortOrder=name&sortDirection=${sortDirection.toUpperCase() === 'DESC' ? 'ASC' : 'DESC'}`} >Name</Link>
                    </th>
                    <th
                    >
                        <Link href={`users?sortOrder=email&sortDirection=${sortDirection.toUpperCase() === 'DESC' ? 'ASC' : 'DESC'}`} >Email</Link>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    users.sort((a, b) => {
                        return compareFunction(a[sortOrder], b[sortOrder], sortDirection) || 0
                    }
                    ).map(user => (<tr key={user.id}>
                        <td><Link href={`/users/${user.id}`}>{user.id}</Link></td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>))
                }
            </tbody>
        </table>
    )
}

export default UserTable