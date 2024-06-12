import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white text-black p-10">

      
     <h1 className='font-bold text-3xl text-center md:text-5xl lg:text-6xl lg:pt-14'>We Fly High and Hunt Championships</h1>
     <h2 className='text-center pt-4 md:pt-10 lg:text-lg lg:pt-20'>Join us year round for news, notes, stories and strategies that will help you win fantasy football championships</h2>
     
     
     <div className=' flex flex-col sm:flex-row pt-16 w-screen px-10'>
        <div className=' h-96 sm:w-1/2  relative bg-lime-500 '>
            <Image
              src='/images/theFantasyFlyerLogo.png'
              alt='Football field and stadium at the 50 yard line'
              fill
              className='w-full h-full object-cover '
            />
        </div>
        <div className='flex flex-col justify-center pt-10 sm:w-1/2 md:pl-10'>
            <h1 className=' text-2xl font-semibold'>kjdlgkj kljdnv jko ojdhf oidf oijdf </h1>
            <p className='text-md  py-8'>nflkjsdnbvlksdfjblsdfjhgb fhg fkjhasd fkjahsdg fkjasdhgf kjasdhgf kjsadhgf ksajdhgf kasjdhgf kjasdhfg kjsadhfg kjhsadfg kjdsahfg kjasdhfg kdsajhfg dsakjfhg dsakjhfg sdkjfg jd f df kdjshf dhfjhd hfgdkjhfg dkjfg</p>
            <Link href={"/"} className=" bg-lime-500 hover:bg-lime-800 p-2 rounded-md text-white w-24 text-center">Read More</Link>
        </div>
     </div>


     <div className='w-full text-center md:text-left'>
        <h1 className='font-semibold text-2xl py-6 md:pt-14  md:pb-10 md:text-left'>Categories</h1>
     </div> 
     <div className='grid grid-cols-1 gap-4 w-full  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8'>
        <Link href={"/"} className="w-full bg-lime-500 hover:bg-lime-900 p-2 rounded-md text-white text-center">News</Link>
        <Link href={"/"} className="w-full bg-sky-500 hover:bg-sky-900 p-2 rounded-md text-white text-center">Blog</Link>
        <Link href={"/"} className="w-full bg-rose-500 hover:bg-rose-900 p-2 rounded-md text-white text-center">Mock</Link>
        <Link href={"/"} className="w-full bg-amber-500 hover:bg-amber-900 p-2 rounded-md text-white text-center">Fantasy</Link>
        <Link href={"/"} className="w-full bg-emerald-500 hover:bg-emerald-900 p-2 rounded-md text-white text-center">Conference</Link>
        <Link href={"/"} className="w-full bg-cyan-500 hover:bg-cyan-900 p-2 rounded-md text-white text-center">Division</Link>
        <Link href={"/"} className="w-full bg-fuchsia-500 hover:bg-fuchsia-900 p-2 rounded-md text-white text-center">Team</Link>
        <Link href={"/"} className="w-full bg-stone-500 hover:bg-stone-900 p-2 rounded-md text-white text-center">Player</Link>
     </div>

     <div className='flex flex-col w-full lg:flex-row'>
      <div className='lg:w-4/5 flex flex-col'>
        <div className='w-full text-center md:text-left'>
            <h1 className='font-semibold text-2xl py-6 md:pt-14  md:pb-10 md:text-left'>Recent posts</h1>
        </div> 
        <div className='flex flex-col w-full gap-10'>

          <div className=' flex flex-col md:flex-row  '>
              <div className=' md:w-72 md:h-72 relative bg-lime-500 '>
                  <Image
                    src='/images/coquiIcon.jpg'
                    alt='Football field and stadium at the 50 yard line'
                    fill
                    className='w-full h-full object-cover '
                  />
              </div>
              <div className='flex flex-col justify-between w-full md:px-10 '>
                  <h3 className='text-stone-400'>Date and time</h3>
                  <h1 className=' text-xl font-semibold'>kjdlgkj kljdnv jko ojdhf oidf oijdf </h1>
                  <p className='text-md  '>nflkjsdnbvlksdfjblsdfjhgb fhg fkjhasd fkjahsdg fkjasdhgf kjasdhgf kjsadhgf ksajdhgf kasjdhgf kjasdhfg kjsadhfg kjhsadfg kjdsahfg kjasdhfg kdsajhfg dsakjfhg dsakjhfg sdkjfg jd f df kdjshf dhfjhd hfgdkjhfg dkjfg</p>
                  <Link href={"/"} className="underline hover:text-lime-800 underline-offset-4 rounded-md text-lime-500 w-24 text-center ">Read More</Link>
              </div>
          </div>


          <div className=' flex flex-col md:flex-row  '>
              <div className=' md:w-72 md:h-72 relative bg-lime-500 '>
                  <Image
                    src='/images/coquiIcon.jpg'
                    alt='Football field and stadium at the 50 yard line'
                    fill
                    className='w-full h-full object-cover '
                  />
              </div>
              <div className='flex flex-col justify-between w-full md:px-10 '>
                  <h3 className='text-stone-400'>Date and time</h3>
                  <h1 className=' text-xl font-semibold'>kjdlgkj kljdnv jko ojdhf oidf oijdf </h1>
                  <p className='text-md  '>nflkjsdnbvlksdfjblsdfjhgb fhg fkjhasd fkjahsdg fkjasdhgf kjasdhgf kjsadhgf ksajdhgf kasjdhgf kjasdhfg kjsadhfg kjhsadfg kjdsahfg kjasdhfg kdsajhfg dsakjfhg dsakjhfg sdkjfg jd f df kdjshf dhfjhd hfgdkjhfg dkjfg</p>
                  <Link href={"/"} className="underline hover:text-lime-800 underline-offset-4 rounded-md text-lime-500 w-24 text-center ">Read More</Link>
              </div>
          </div>

          <div className=' flex flex-col md:flex-row  '>
              <div className=' md:w-72 md:h-72 relative bg-lime-500 '>
                  <Image
                    src='/images/coquiIcon.jpg'
                    alt='Football field and stadium at the 50 yard line'
                    fill
                    className='w-full h-full object-cover '
                  />
              </div>
              <div className='flex flex-col justify-between w-full md:px-10 '>
                  <h3 className='text-stone-400'>Date and time</h3>
                  <h1 className=' text-xl font-semibold'>kjdlgkj kljdnv jko ojdhf oidf oijdf </h1>
                  <p className='text-md  '>nflkjsdnbvlksdfjblsdfjhgb fhg fkjhasd fkjahsdg fkjasdhgf kjasdhgf kjsadhgf ksajdhgf kasjdhgf kjasdhfg kjsadhfg kjhsadfg kjdsahfg kjasdhfg kdsajhfg dsakjfhg dsakjhfg sdkjfg jd f df kdjshf dhfjhd hfgdkjhfg dkjfg</p>
                  <Link href={"/"} className="underline hover:text-lime-800 underline-offset-4 rounded-md text-lime-500 w-24 text-center ">Read More</Link>
              </div>
          </div>

          <div className=' flex flex-col md:flex-row  '>
              <div className=' md:w-72 md:h-72 relative bg-lime-500 '>
                  <Image
                    src='/images/coquiIcon.jpg'
                    alt='Football field and stadium at the 50 yard line'
                    fill
                    className='w-full h-full object-cover '
                  />
              </div>
              <div className='flex flex-col justify-between w-full md:px-10 '>
                  <h3 className='text-stone-400'>Date and time</h3>
                  <h1 className=' text-xl font-semibold'>kjdlgkj kljdnv jko ojdhf oidf oijdf </h1>
                  <p className='text-md  '>nflkjsdnbvlksdfjblsdfjhgb fhg fkjhasd fkjahsdg fkjasdhgf kjasdhgf kjsadhgf ksajdhgf kasjdhgf kjasdhfg kjsadhfg kjhsadfg kjdsahfg kjasdhfg kdsajhfg dsakjfhg dsakjhfg sdkjfg jd f df kdjshf dhfjhd hfgdkjhfg dkjfg</p>
                  <Link href={"/"} className="underline hover:text-lime-800 underline-offset-4 rounded-md text-lime-500 w-24 text-center ">Read More</Link>
              </div>
          </div>

          <div className=' flex flex-col md:flex-row  '>
              <div className=' md:w-72 md:h-72 relative bg-lime-500 '>
                  <Image
                    src='/images/coquiIcon.jpg'
                    alt='Football field and stadium at the 50 yard line'
                    fill
                    className='w-full h-full object-cover '
                  />
              </div>
              <div className='flex flex-col justify-between w-full md:px-10 '>
                  <h3 className='text-stone-400'>Date and time</h3>
                  <h1 className=' text-xl font-semibold'>kjdlgkj kljdnv jko ojdhf oidf oijdf </h1>
                  <p className='text-md  '>nflkjsdnbvlksdfjblsdfjhgb fhg fkjhasd fkjahsdg fkjasdhgf kjasdhgf kjsadhgf ksajdhgf kasjdhgf kjasdhfg kjsadhfg kjhsadfg kjdsahfg kjasdhfg kdsajhfg dsakjfhg dsakjhfg sdkjfg jd f df kdjshf dhfjhd hfgdkjhfg dkjfg</p>
                  <Link href={"/"} className="underline hover:text-lime-800 underline-offset-4 rounded-md text-lime-500 w-24 text-center ">Read More</Link>
              </div>
          </div>
          

        </div>
      </div>
      <div className='pt-10 md:pt-0 md:w-full lg:w-1/5 flex flex-col md:flex-row lg:flex-col'>
        <div className='w-full  text-left flex flex-col md:pt-14 md:w-1/2 lg:w-full'>
            <h3 className='text-xs text-stone-400'>What&apos;s hot</h3>
            <h1 className='font-semibold text-2xl pb-6  md:pb-6 '>Most Popular</h1>
            <div className='flex flex-col gap-4'>

              <div className='flex flex-col justify-between w-full '>
                  <Link href={"/"} className="hover:underline hover:text-lime-500 hover:underline-offset-4   md:text-left text-center ">
                  <div className='bg-rose-500 text-xs w-[30%] rounded-full  text-center '>Mock</div>
                  <h1 className='py-2'>kjdlgkj kljdnv jko ojdhf oidf oijdf </h1>
                  <h3 className='text-stone-400 text-xs'>Date and time</h3>
                  </Link>
              </div>

              <div className='flex flex-col justify-between w-full '>
                  <Link href={"/"} className="hover:underline hover:text-lime-500 hover:underline-offset-4   md:text-left text-center ">
                  <div className='bg-rose-500 text-xs w-[30%] rounded-full  text-center '>Mock</div>
                  <h1 className='py-2'>kjdlgkj kljdnv jko ojdhf oidf oijdf </h1>
                  <h3 className='text-stone-400 text-xs'>Date and time</h3>
                  </Link>
              </div>

              <div className='flex flex-col justify-between w-full '>
                  <Link href={"/"} className="hover:underline hover:text-lime-500 hover:underline-offset-4   md:text-left text-center ">
                  <div className='bg-rose-500 text-xs w-[30%] rounded-full  text-center '>Mock</div>
                  <h1 className='py-2'>kjdlgkj kljdnv jko ojdhf oidf oijdf </h1>
                  <h3 className='text-stone-400 text-xs'>Date and time</h3>
                  </Link>
              </div>

              <div className='flex flex-col justify-between w-full '>
                  <Link href={"/"} className="hover:underline hover:text-lime-500 hover:underline-offset-4   md:text-left text-center ">
                  <div className='bg-rose-500 text-xs w-[30%] rounded-full  text-center '>Mock</div>
                  <h1 className='py-2'>kjdlgkj kljdnv jko ojdhf oidf oijdf </h1>
                  <h3 className='text-stone-400 text-xs'>Date and time</h3>
                  </Link>
              </div>

            </div>


        </div> 
        <div className='w-full  md:w-1/2 lg:w-full text-left flex flex-col md:pt-14 '>
            <h3 className='text-xs text-stone-400'>Discover by topic</h3>
            <h1 className='font-semibold text-2xl pb-6  md:pb-10 '>Categories</h1>

            <div className='grid  gap-4 w-full  grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                <Link href={"/"} className="w-full bg-lime-500 hover:bg-lime-900 p-2 rounded-full text-white text-center">News</Link>
                <Link href={"/"} className="w-full bg-sky-500 hover:bg-sky-900 p-2 rounded-full text-white text-center">Blog</Link>
                <Link href={"/"} className="w-full bg-rose-500 hover:bg-rose-900 p-2 rounded-full text-white text-center">Mock</Link>
                <Link href={"/"} className="w-full bg-amber-500 hover:bg-amber-900 p-2 rounded-full text-white text-center">Fantasy</Link>
                <Link href={"/"} className="w-full bg-emerald-500 hover:bg-emerald-900 p-2 rounded-full text-white text-center">Conf</Link>
                <Link href={"/"} className="w-full bg-cyan-500 hover:bg-cyan-900 p-2 rounded-full text-white text-center">Division</Link>
                <Link href={"/"} className="w-full bg-fuchsia-500 hover:bg-fuchsia-900 p-2 rounded-full text-white text-center">Team</Link>
                <Link href={"/"} className="w-full bg-stone-500 hover:bg-stone-900 p-2 rounded-full text-white text-center">Player</Link>
            </div>
        </div> 
      </div>
     </div>
    </main>
  )
}
