import React from 'react'

type Props = {}

const TopAdvertisement = (props: Props) => {
    return (
        <div className='w-screen bg-dark-red text-center m-auto  h-10 relative animate-ben-thanh-market-background-changing'>
            <span style={{
                right: '-28%',
            }} className=' block text-md text-white font-bold pt-2.5 tracking-wide absolute whitespace-nowrap animate-ben-thanh-market-text-runner'>
                FREE SHIPPING FOR BILLS FROM 200K
            </span>
            <span style={{
                right: '-40%',
                animationDelay: '4s',
                MozAnimationDelay: '4s',
                WebkitAnimationDelay: '4s',
            }} className=' block text-md text-white font-bold pt-2.5 tracking-wide absolute whitespace-nowrap animate-ben-thanh-market-text-runner'>
                {/* FREE SHIPPING FOR BILLS FROM 200K */}
                BLACK FRIDAY UPTO 70% FOR &apos;LILFAM&apos; COLLECTION
            </span>
        </div>
    )
}

export default TopAdvertisement