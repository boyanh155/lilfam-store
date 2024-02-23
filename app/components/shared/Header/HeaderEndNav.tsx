import React from 'react'

type Props = {}

const HeaderEndNav = (props: Props) => {
    return (
        <div className='flex justify-end content-center gap-7 text-dark-main'>
            <div className="cursor-pointer transition-opacity hover:opacity-60 text-s text-right">Help</div>
            <div className="cursor-pointer transition-opacity hover:opacity-60 text-s text-right">Order tracker</div>
            <div className="cursor-pointer transition-opacity hover:opacity-60 text-s text-right">Become a member</div>
        </div>
    )
}

export default HeaderEndNav