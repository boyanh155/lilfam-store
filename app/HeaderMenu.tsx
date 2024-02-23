import Link from 'next/link'
import React from 'react'
import NavBar from './components/shared/Header/NavBar'
import HeaderEnd from './components/shared/Header/HeaderEnd'
import LogoLightHeader from "@/app/assets/imgs/logos/logo-light-rec.svg"
import Image from 'next/image'

type Props = {}

const HeaderMenu = (props: Props) => {
    return (
        <div className='bg-white navbar  justify-between items-end content-container'>
            <div className="flex-none">
                <Link href='/'>
                    <Image alt='Lilshooz' src={LogoLightHeader} className='h-25 w-25 '/>
                </Link>
            </div>
            <div className='flex-1 justify-end mr-24'>
                <NavBar />

            </div>
            <div className='flex-none'>
                <HeaderEnd />


            </div>
        </div>
    )
}

export default HeaderMenu