import Link from 'next/link'
import React, { useState } from 'react'
import Dropdown from '../../Home/Dropdown'
import { MenuItem } from './menuData/menu'

type Props = {
    item: MenuItem,
    path: string
}

const NavbarItem = ({ item, path }: Props) => {
    const [isDrop, setIsDrop] = useState(false)
    return (
        <div onMouseEnter={() => setIsDrop(true)} onMouseLeave={() => setIsDrop(false)}>
            {/* MAIN ITEM */}
            <Link href={item.link} className={`
                block col-span-1 text-base font-bold text-center subpixel-antialiased uppercase transition-all
                z-40
                hover:border-b-2 hover:border-dark-main border-transparent border-b-2
                
                ${path.split('/')[1] === item.link ? 'border-b-2 border-dark-main' : ''}
                `}>{item.name}</Link>
            {/* DROP DOWN */}
            {item.dropdownMenu.length > 0 && isDrop &&
                <Dropdown menuData={item.dropdownMenu} />
            }

        </div>
    )
}

export default NavbarItem