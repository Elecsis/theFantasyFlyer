import React from "react";
import Image from 'next/image'
import PopularPosts from "@/app/componets/PopularPost";
import SideCategories from "@/app/componets/SideCategories";
import EditorsPosts from "@/app/componets/EditorsPosts";

const getData = async ( {slug}: any) => {
    console.log('getdata:.....', slug)
    const team = `https://www.thefantasyflyer.com/api/research/teams/${slug}` 
    console.log(team)
    const res = await fetch(team, {
        cache: 'no-store',
    });
    if(!res.ok){
        throw new Error('Failed')
    }
    return res.json()
};


const Team = async( {params}: any) => {
    const slug = params 
   
    const data = await getData(slug)
    console.log(data)
    
    return (
        <main className="bg-white text-black">

            <div className=' flex flex-col sm:flex-row lg:pt-16 w-screen px-10'>
                <div className='flex flex-col justify-between pt-10 sm:w-1/2 md:pr-10 pb-5'>
                    <h1 className=' text-5xl font-semibold'>{data.City} </h1>
                    <h1 className=' text-5xl font-semibold'>{data.Name} </h1>
                    <div className="flex flex-row gap-3 ">
                        
                        <div className="text-stone-600">
                            <h2 className=""></h2>
                            <h3 className="text-xs"></h3>
                        </div>
                    </div>
                </div>
                {data?.WikipediaLogoURL && (<div className='w-full h-96 sm:w-1/2  aspect-square relative bg-lime-500 rounded-lg'>
                    <Image
                        src={data.WikipediaLogoURL}
                        alt='Football field and stadium at the 50 yard line'
                        fill
                        className='w-full h-full object-cover rounded-lg'
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority= {true }
                    />
                </div>)}
            </div>

            <div className='flex flex-col w-full lg:flex-row px-10'>
                <div className='lg:w-4/5 flex flex-col'>
                    <h1 className=' text-3xl '>{data.Conference} </h1>
                    <h1 className=' text-3xl '>{data.Division} </h1>
                    <h1 className=' text-3xl '>{data.HeadCoach} </h1>
                    <h1 className=' text-3xl '>{data.OffensiveCoordinator} </h1>
                    <h1 className=' text-3xl '>{data.DefensiveCoordinator} </h1>
                    <h1 className=' text-3xl '>{data.SpecialTeamsCoach} </h1>
                    <h1 className=' text-3xl '>{data.OffensiveScheme} </h1>
                    <h1 className=' text-3xl '>{data.DefensiveScheme} </h1>
                    
                   {/* Here is were the team infp will be presented */}
                </div>
                <div className='pt-10 md:pt-0 md:w-full lg:w-1/5 flex flex-col md:flex-row lg:flex-col md:px-10 lg:px-0'>
                    <PopularPosts/>
                    <SideCategories/>
                    <EditorsPosts/>
              

                    
                </div>
                
            </div>


        </main>
        
    )
}

export default Team;