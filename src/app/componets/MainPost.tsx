import Image from 'next/image'
import Link from 'next/link'

export default function MainPost() {
    return (
        <div className=' flex flex-col sm:flex-row pt-16 w-screen md:pr-10 px-10'>
            <div className=' h-fit  aspect-square w-full sm:w-1/2 relative bg-lime-500 '>
                <Image
                src='/images/theFantasyFlyerLogo.png'
                alt='Football field and stadium at the 50 yard line'
                fill
                className='w-full h-full object-cover '
                />
            </div>
            <div className='flex flex-col justify-center py-10 sm:pt-5 md:pt-10 sm:w-1/2 sm:pl-10 '>
                <h1 className='text-lg md:text-2xl font-semibold'>kjdlgkj kljdnv jko ojdhf oidf oijdf </h1>
                <p className='sm:text-sm  md:text-base py-8 sm:py-4 md:py-8'>nflkjsdnbvlksdfjblsdfjhgb fhg fkjhasd fkjahsdg fkjasdhgf kjasdhgf kjsadhgf ksajdhgf kasjdhgf kjasdhfg kjsadhfg kjhsadfg kjdsahfg kjasdhfg kdsajhfg dsakjfhg dsakjhfg sdkjfg jd f df kdjshf dhfjhd hfgdkjhfg dkjfg</p>
                <Link href={"/blog"} className=" bg-lime-500 hover:bg-lime-800 p-2 rounded-md text-white w-24 text-center">Read More</Link>
            </div>
        </div>
    ) 
}