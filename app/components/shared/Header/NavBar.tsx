'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { menuData } from './menuData/menu'
import { usePathname, useRouter } from 'next/navigation'
import Dropdown from '../../Home/Dropdown'
import { dropDownCol } from '../../Home/dummyData/dropdown'
import NavbarItem from './NavbarItem'


type Props = {

}
const NavBar = ({ }: Props) => {
    const path = usePathname()

    return (
        <div className='grid grid-cols-4 gap-x-12 text-dark-main '>
            {
                menuData.map((v, index) => <NavbarItem key={index} path={path} item={v} />)
            }

        </div>

    )
}

export default NavBar