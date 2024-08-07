import React from "react";
import Image from 'next/image'
import Comments from "@/app/componets/Comments";
import { SideCol } from "@/app/componets/SideCol";


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
                    <h1 className=' text-4xl font-semibold'>{data.post.title} </h1>
                    
                    <div className="flex flex-row gap-3 ">
                        <div className="w-10 h-10 rounded-lg relative">
                            <Image
                                src={data.post.user.image}
                                alt='Football field and stadium at the 50 yard line'
                                fill
                                className='w-full h-full object-cover rounded-full'
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority
                            />
                        </div>
                        <div className="text-stone-600">
                            <h2 className="">{data.post.user.name}</h2>
                            <h3 className="text-xs">{data.post.createdAt.substring(0,10)}</h3>
                        </div>
                    </div>
                </div>
                {data?.post.img && (<div className='w-full h-96 sm:w-1/2  aspect-square relative bg-lime-500 rounded-lg'>
                    <Image
                        src={data.post.img}
                        alt='Football field and stadium at the 50 yard line'
                        fill
                        className='w-full h-full object-fill rounded-lg'
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
                <SideCol/>
            </div>
        </main>
    )
}

export default Blog;