import Link from 'next/link'
import SideCategories from './SideCategories'
import CardList from './CardList'

export default function MainPostBody(page: any, cat: any) {
    
    

    return (
        <div className='flex flex-col w-full lg:flex-row px-5 sm:px-10'>
            <div className='lg:w-4/5 flex flex-col'>
                <div id='posts' className='w-full text-center md:text-left'>
                    <h1 className='font-semibold text-2xl py-6 md:pt-14  md:pb-10 md:text-left'>Recent posts</h1>
                </div> 
                <CardList page={page.page} cat={page.cat} />
            </div>
            <div className='pt-10 md:pt-0 md:w-full lg:w-1/5 flex flex-col md:flex-row lg:flex-col md:px-10 lg:px-0 md:gap-4'>
                <div className='w-full  text-left flex flex-col md:pt-14 md: lg:w-full'>
                    <h3 className='text-xs text-stone-400'>What&apos;s hot</h3>
                    <h1 className='font-semibold text-2xl pb-6  md:pb-6 '>Most Popular</h1>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col justify-between w-full '>
                            <div className='bg-rose-500 hover:text-black text-xs w-[30%] rounded-full  text-center :'>Mock</div>
                            <Link href={"/blog"} className="hover:underline    md:text-left  ">
                            <h1 className='py-2 text-lg md:text-base hover:text-lime-500 hover:underline-offset-4'>kjdlgkj kljdnv jko ojdhf oijhksdfldskjf jhdg jhg k fdsgfjhdsg jhsdgdf oijdf </h1>
                            </Link>
                            <h3 className='text-stone-400 text-xs '>Date and time</h3>
                        </div>

                        <div className='flex flex-col justify-between w-full '>
                            <div className='bg-rose-500 hover:text-black text-xs w-[30%] rounded-full  text-center :'>Mock</div>
                            <Link href={"/blog"} className="hover:underline    md:text-left  ">
                            <h1 className='py-2 text-lg md:text-base hover:text-lime-500 hover:underline-offset-4'>kjdlgkj kljdnv jko ojdhf oijhksdfldskjf jhdg jhg k fdsgfjhdsg jhsdgdf oijdf </h1>
                            </Link>
                            <h3 className='text-stone-400 text-xs '>Date and time</h3>
                        </div>

                        <div className='flex flex-col justify-between w-full '>
                            <div className='bg-rose-500 hover:text-black text-xs w-[30%] rounded-full  text-center :'>Mock</div>
                            <Link href={"/blog"} className="hover:underline    md:text-left  ">
                            <h1 className='py-2 text-lg md:text-base hover:text-lime-500 hover:underline-offset-4'>kjdlgkj kljdnv jko ojdhf oijhksdfldskjf jhdg jhg k fdsgfjhdsg jhsdgdf oijdf </h1>
                            </Link>
                            <h3 className='text-stone-400 text-xs '>Date and time</h3>
                        </div>

                        <div className='flex flex-col justify-between w-full '>
                            <div className='bg-rose-500 hover:text-black text-xs w-[30%] rounded-full  text-center :'>Mock</div>
                            <Link href={"/blog"} className="hover:underline    md:text-left  ">
                            <h1 className='py-2 text-lg md:text-base hover:text-lime-500 hover:underline-offset-4'>kjdlgkj kljdnv jko ojdhf oijhksdfldskjf jhdg jhg k fdsgfjhdsg jhsdgdf oijdf </h1>
                            </Link>
                            <h3 className='text-stone-400 text-xs '>Date and time</h3>
                        </div>

                        <div className='flex flex-col justify-between w-full '>
                            <div className='bg-rose-500 hover:text-black text-xs w-[30%] rounded-full  text-center :'>Mock</div>
                            <Link href={"/blog"} className="hover:underline    md:text-left  ">
                            <h1 className='py-2 text-lg md:text-base hover:text-lime-500 hover:underline-offset-4'>kjdlgkj kljdnv jko ojdhf oijhksdfldskjf jhdg jhg k fdsgfjhdsg jhsdgdf oijdf </h1>
                            </Link>
                            <h3 className='text-stone-400 text-xs '>Date and time</h3>
                        </div>
                    </div>
                </div> 
                <div className='w-full'>
                    <SideCategories/>
                    <div className='w-full  text-left flex flex-col pt-10 md:pt-6  lg:pt-16'>
                        <h1 className='font-semibold text-2xl pb-6  md:pb-6 '>Editors Picks</h1>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-col justify-between w-full '>
                                <div className='bg-rose-500 hover:text-black text-xs w-[30%] rounded-full  text-center :'>Mock</div>
                                <Link href={"/blog"} className="hover:underline    md:text-left  ">
                                <h1 className='py-2 text-lg md:text-base hover:text-lime-500 hover:underline-offset-4'>kjdlgkj kljdnv jko ojdhf oijhksdfldskjf jhdg jhg k fdsgfjhdsg jhsdgdf oijdf </h1>
                                </Link>
                                <h3 className='text-stone-400 text-xs '>Date and time</h3>
                            </div>

                            <div className='flex flex-col justify-between w-full '>
                                <div className='bg-rose-500 hover:text-black text-xs w-[30%] rounded-full  text-center :'>Mock</div>
                                <Link href={"/blog"} className="hover:underline    md:text-left  ">
                                <h1 className='py-2 text-lg md:text-base hover:text-lime-500 hover:underline-offset-4'>kjdlgkj kljdnv jko ojdhf oijhksdfldskjf jhdg jhg k fdsgfjhdsg jhsdgdf oijdf </h1>
                                </Link>
                                <h3 className='text-stone-400 text-xs '>Date and time</h3>
                            </div>

                            <div className='flex flex-col justify-between w-full '>
                                <div className='bg-rose-500 hover:text-black text-xs w-[30%] rounded-full  text-center :'>Mock</div>
                                <Link href={"/blog"} className="hover:underline    md:text-left  ">
                                <h1 className='py-2 text-lg md:text-base hover:text-lime-500 hover:underline-offset-4'>kjdlgkj kljdnv jko ojdhf oijhksdfldskjf jhdg jhg k fdsgfjhdsg jhsdgdf oijdf </h1>
                                </Link>
                                <h3 className='text-stone-400 text-xs '>Date and time</h3>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    ) 
}












