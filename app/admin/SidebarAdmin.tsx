import React from 'react'
import { menuData } from './menuData'
import Link from 'next/link'
const SidebarAdmin = () => {
    return (
        <aside>

            <ul className="menu w-56 rounded-box bg-white text-admin-menu-text">
                {menuData.map((v, index) => <li  key={index}>
                    <Link href={'/admin/'+v.link}>
                        {/* {v.icon()} */}
                        <v.icon/>
                        {/* <i className='text-admin-menu-icon' dangerouslySetInnerHTML={{__html:v.icon}}/> */}
                        {v.name}
                    </Link>
                </li>)}
            </ul>
        </aside>
    )
}

export default SidebarAdmin