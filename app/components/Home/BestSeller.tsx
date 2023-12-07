import React from 'react'
import { bestSellerData } from './bestsellerData/data'
import Image from 'next/image'

type Props = {}

const BestSeller = (props: Props) => {
    return (
        <div className='flex flex-col content-container pt-14 '>
            <div className='w-full text-center'>

                <p className='text-2xl font-bold uppercase text-black'>best seller</p>
            </div>
            <div className='row-span-1 mt-14'>
                <div className='grid grid-rows-1 grid-cols-3 gap-20'>
                    {
                        bestSellerData.map((v, i) =>
                            <div key={i} style={{
                                borderWidth:'1px'
                            }} className="card col-span-1 bg-base-100 shadow-xl px-4 pt-10 border-dark-main rounded-3xl">
                                <div className=" bg-dark-main h-52 rounded-xl flex justify-center">
                                    <Image src={v.img} alt="Shoes" className='content-center align-middle ' />
                                </div>
                                <div className="card-body items-center text-center">
                                    <p className="card-title text-base font-medium">{v.name}</p>
                                    <p className='text-sm text-zinc-400'>{v.category}</p>

                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default BestSeller