import React from 'react'
import HeaderButtonGroup from './HeaderButtonGroup'
import HeaderEndNav from './HeaderEndNav'

type Props = {}

const HeaderEnd = (props: Props) => {
    return (
        <div className='grid grid-rows-2'>
            <div className='row-span-1'>

                <HeaderEndNav />
            </div>

            <div className="row-span-1">
                <HeaderButtonGroup />

            </div>
        </div>
    )
}

export default HeaderEnd