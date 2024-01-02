import React from 'react'

type Props = {
    title: string,
    direction: 'text-center' | 'text-start' | 'text-end'
}

const Title = ({ title, direction = 'text-start' }: Props) => {
    return (
        <div className={`w-full ${direction} pb-10 pt-16`}>

            <p className='text-2xl font-bold uppercase text-black'>{title}</p>
        </div>
    )
}

export default Title