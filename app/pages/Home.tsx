import React from 'react'
import HeroBanner from '../components/Home/HeroBanner'
import BestSeller from '../components/Home/BestSeller'
import News from '../components/Home/News'
import Popular from '../components/Home/Popular'

type Props = {}

const Home = (props: Props) => {
    return (
        <div className='w-screen h-screen '>
            <HeroBanner />
            <BestSeller />
            <News />
            <Popular />
        </div>
    )
}

export default Home