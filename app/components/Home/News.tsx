import React from 'react'
import { whatshotData } from './whatshotData/data';
import Image from 'next/image';

type Props = {}

const News = (props: Props) => {
    return (
        <div className='flex flex-col content-container pt-14 '>

            <div className='w-full text-start pb-10 pt-16'>

                <p className='text-2xl font-bold uppercase text-black'>What&apos;s hot</p>
            </div>

            <div className='grid grid-cols-4 gap-5'>
                {whatshotData.map((v, i) => <div key={i} style={{
                    borderWidth: '1px'
                }} className='card col-span-1 bg-base-100 shadow-xl px-4 pt-10 border-dark-main rounded-3xl'>
                    <div className='w-full h-72 flex justify-center content-center bg-dark-main rounded-xl relative'>
                        <Image src={v.img} alt='Card img ' />
                        <p className='text-xs text-white py-2 px-6 border-white border
                         rounded-full absolute bottom-3 right-5
                          after:content-[""]
                          after:block
                          after:relative
                          after:h-2
                          after:w-4
                           after:bg-white
                         '>See more</p>
                    </div>
                    <div className="pt-0 pb-7">
                        <p className="card-title text-base font-medium mt-4 mb-0">{v.title}</p>
                        <p className=' text-xs tracking-wide'>{v.description}</p>

                    </div>

                </div>)}
            </div>
        </div>
    )
}

export default News