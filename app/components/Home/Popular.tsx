import React from 'react'
import Title from './common/Title'
import { popularData } from './popular/data'
import Image from 'next/image'

type Props = {}

const Popular = (props: Props) => {
    return (
        <div className='flex flex-col pt-14 w-screen content-container'>
            <Title title='what people are buying' direction='text-start' />
            <div className='flex overflow-x-scroll gap-10 snap-x snap-mandatory'>
                <div className=' basis-48 snap-center flex-shrink-0'></div>
                {
                    popularData.map((v, i) => <div key={i} className='snap-center basis-64 flex-shrink-0 landing_card gap-6' >
                        <div className='img_wrapper h-32 w-full'>
                            <Image src={v.img} alt='Shoes' className='content-center align-middle' />
                        </div>
                        <div className="items-start text-start ">
                            <p className="card-title text-base font-medium">{v.name}</p>
                            <p className='text-sm text-zinc-400'>{v.category}</p>
                        </div>
                        <div className='flex'>
                            <div className=''>
                                <button className='yellow-button rounded-bt'>

                                    {v.price}$
                                </button>
                            </div>
                            <div className='button-arrow rounded-bt'>See more</div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Popular