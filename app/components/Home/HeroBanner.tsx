import React from 'react'

type Props = {}

const HeroBanner = (props: Props) => {
    return (
        <div style={{
            paddingTop:'32%'
        }} className='w-screen bg-dark-main relative'>
            <div className='absolute top-1/2 left-1/2 text-center text-white'>
                [INSERT IMAGE PLEASE]
            </div>
        </div>
    )
}

export default HeroBanner