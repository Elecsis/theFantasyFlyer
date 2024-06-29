import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import Comments from "@/app/componets/Comments";

const getData = async (slug: any) => {
    const res = await fetch(`https://www.thefantasyflyer.com/api/posts/${slug}`, {
        cache: 'no-store',
    });
    if(!res.ok){
        throw new Error('Failed')
    }
    return res.json()
};

const Blog = async( {params}: any) => {
    const {slug} = params
    const data = await getData(slug)
    return (
        <main className="bg-white text-black">

            <div className=' flex flex-col sm:flex-row lg:pt-16 w-screen px-10'>
                <div className='flex flex-col justify-between pt-10 sm:w-1/2 md:pr-10 pb-5'>
                    <h1 className=' text-5xl font-semibold'>{data.post.title} </h1>
                    
                    <div className="flex flex-row gap-3">
                        <div className="w-10 h-10 rounded-sm relative">
                            <Image
                                src={data.post.user.image}
                                alt='Football field and stadium at the 50 yard line'
                                fill
                                className='w-full h-full object-cover rounded-full'
                                priority= {true }
                            />
                        </div>
                        <div className="text-stone-600">
                            <h2 className="">{data.post.user.name}</h2>
                            <h3 className="text-xs">{data.post.createdAt.substring(0,10)}</h3>
                        </div>
                    </div>
                </div>
                {data?.post.img && (<div className='w-full h-96 sm:w-1/2  aspect-square relative bg-lime-500 '>
                    <Image
                        src={data.post.img}
                        alt='Football field and stadium at the 50 yard line'
                        fill
                        className='w-full h-full object-cover '
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority= {true }
                    />
                </div>)}
            </div>

            <div className='flex flex-col w-full lg:flex-row px-10'>
                <div className='lg:w-4/5 flex flex-col'>
                   
                    <div className='flex flex-col w-full lg:pr-20 pt-16'>
                        <div
                            dangerouslySetInnerHTML={{__html: data?.post.desc}}
                        /> 
                        
                        <Comments postSlug={data.post.slug}/>
                    </div>
                </div>
                <div className='pt-10 md:pt-0 md:w-full lg:w-1/5 flex flex-col md:flex-row lg:flex-col md:px-10 lg:px-0'>

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
                        <div className=' text-left md:w-full flex flex-col pt-10 md:pt-14 '>
                            <h3 className='text-xs text-stone-400'>Discover by topic</h3>
                            <h1 className='font-semibold text-2xl pb-6  md:pb-4  '>Categories</h1>

                            <div className='grid  gap-4 w-full  grid-cols-2 md:grid-cols-4 lg:grid-cols-2'>
                                <Link href={"/news"} className="w-full bg-lime-500 hover:bg-lime-900 p-2 rounded-full text-white text-center">News</Link>
                                <Link href={"/news"} className="w-full bg-sky-500 hover:bg-sky-900 p-2 rounded-full text-white text-center">Blog</Link>
                                <Link href={"/news"} className="w-full bg-rose-500 hover:bg-rose-900 p-2 rounded-full text-white text-center">Mock</Link>
                                <Link href={"/news"} className="w-full bg-amber-500 hover:bg-amber-900 p-2 rounded-full text-white text-center">Fantasy</Link>
                                <Link href={"/news"} className="w-full bg-emerald-500 hover:bg-emerald-900 p-2 rounded-full text-white text-center">Conf</Link>
                                <Link href={"/news"} className="w-full bg-cyan-500 hover:bg-cyan-900 p-2 rounded-full text-white text-center">Division</Link>
                                <Link href={"/news"} className="w-full bg-fuchsia-500 hover:bg-fuchsia-900 p-2 rounded-full text-white text-center">Team</Link>
                                <Link href={"/news"} className="w-full bg-stone-500 hover:bg-stone-900 p-2 rounded-full text-white text-center">Player</Link>
                            </div>
                        </div> 

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


        </main>
    )
}

export default Blog;