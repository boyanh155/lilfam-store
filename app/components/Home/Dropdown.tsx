import React from 'react'
import { dropDownCol } from './dropdownData/data'
import Link from 'next/link'

type Props = {
    menuData: Array<dropDownCol>
}

const Dropdown = ({ menuData }: Props) => {
    return (
        <div className='absolute left-0 right-0 z-50 w-screen bg-white py-14'>

            <div className={` content-container grid sm-screen:grid-cols-1 md-screen:grid-cols-2 lg-screen:grid-cols-4 `}>
                {menuData.map((v, index) => <div
                    key={index}
                    className='col-span-1'
                >
                    <p className='text-base font-bold mb-4 '>
                        <Link className='hover:opacity-40 transition-opacity' href={v.title.link}>
                            {v.title.label}
                        </Link>
                    </p>
                    {
                        v.rows.map((row, _index) =>
                            <p className='text-sm mb-2 ' key={_index}>
                                <Link className='hover:opacity-40 transition-opacity' href={row.link}>
                                    {row.label}
                                </Link>
                            </p>
                        )
                    }


                </div>)}
            </div>
        </div>

    )
}

export default Dropdown