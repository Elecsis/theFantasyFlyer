import React from "react";
import Image from 'next/image'
import { SideCol } from "@/app/componets/SideCol";
import Link from "next/link";

const getPlayerData = async ( slug: any) => {
    const team = `https://www.thefantasyflyer.com/api/research/players/${slug}` 
    const res = await fetch(team, {
        cache: 'no-store',
    });
    if(!res.ok){
        throw new Error('Failed')
    }
    return res.json()
};




const Player = async( {params}: any) => {
    const slug = params.slug 
    const data = await getPlayerData(slug)
    
    
    return (
        <main className="bg-white text-black" id='topPlayer'>

            <div className=' flex flex-col-reverse sm:flex-row lg:pt-16 w-screen px-10'>
                <div className='flex flex-col justify-between pt-10 sm:w-1/2 md:pr-10 pb-5'>
                    <div className="flex flex-row justify-between pr-5">
                        <h1 className=' text-xl font-semibold'>{data.City} </h1>
                        <Link href={"/research/players"} className="bg-lime-500 text-white rounded-full p-1 lg:p-3 hover:border hover:border-lime-500 hover:text-lime-500 hover:bg-white ">Back to Players </Link>
                    </div>
                    
                    <h1 className=' text-3xl font-semibold'>{data.Name} </h1>

                    <div className="flex flex-row gap-3 ">
                        
                        <div className="text-stone-600">
                            <h2 className=""></h2>
                            <h3 className="text-xs"></h3>
                        </div>
                    </div>
                </div>
                {data?.WikipediaLogoURL && (<div className='w-full h-96 sm:w-1/2   relative bg-lime-500 rounded-lg'>
                    <Image
                        src={data.WikipediaLogoURL}
                        alt='Football field and stadium at the 50 yard line'
                        fill
                        className='w-full h-full  rounded-lg'
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority= {true }
                    />
                </div>)}
            </div>

            <div className='flex flex-col w-full lg:flex-row px-10 '>
               
                <div className=' lg:w-4/5 flex flex-col md:pt-10 lg:pt-20 lg:pr-10 ' id='teamInfoBasic'>
                    <div className="flex flex-row w-full  lg:text-xl pb-5 justify-between md:px-5 text-white pt-5">
                        <h1 className=" border border-lime-500 text-lime-500 rounded-full p-2 lg:p-3  ">Basic Info</h1>
                        <Link href={`/research/teams/${data.Team}/schedule#teamInfoSchedule`} className="bg-lime-500 rounded-full p-2 lg:p-3 hover:border hover:border-lime-500 hover:text-lime-500 hover:bg-white hover:underline">Schedule</Link>
                    </div>
                    <div className="flex flex-col justify-evenly h-full border rounded-xl border-lime-500 ">
                        <div className="flex flex-row justify-between border-b-2 px-2  ">
                            <h1 className=' lg:text-xl '>Team:   </h1>
                            <h1 className=' lg:text-xl '>{data.Team} </h1>
                        </div>
                        <div className="flex flex-row justify-between border-b-2 px-2 ">
                            <h1 className=' lg:text-xl '>College:    </h1>
                            <h1 className=' lg:text-xl '>{data.College} </h1>
                        </div>
                        <div className="flex flex-row justify-between border-b-2 px-2 ">
                            <h1 className=' lg:text-xl '>Height:   </h1>
                            <h1 className=' lg:text-xl '>{data.HeightFeet} {data.HeightInches}</h1>
                        </div>
                        <div className="flex flex-row justify-between border-b-2 px-2 ">
                            <h1 className=' lg:text-xl '>Position:   </h1>
                            <h1 className=' lg:text-xl '>{data.FantasyPosition} </h1>
                        </div>
                        <div className="flex flex-row justify-between border-b-2 px-2 ">
                            <h1 className=' lg:text-xl '>Weight:   </h1>
                            <h1 className=' lg:text-xl '>{data.Weight} </h1>
                        </div>
                        <div className="flex flex-row justify-between border-b-2 px-2 ">
                            <h1 className=' lg:text-xl '>Average Draft Position:  </h1>
                            <h1 className=' lg:text-xl '>{data.AverageDraftPosition} </h1>
                        </div>
                        <div className="flex flex-row justify-between border-b-2 px-2 ">
                            <h1 className=' lg:text-xl '>Average Draft Position PPR:  </h1>
                            <h1 className=' lg:text-xl '>{data.AverageDraftPositionPPR} </h1>
                        </div>
                        <div className="flex flex-row justify-between border-b-2 px-2 ">
                            <h1 className=' lg:text-xl '>Average Draft Position 2QB:  </h1>
                            <h1 className=' lg:text-xl '>{data.AverageDraftPosition2QB} </h1>
                        </div>
                        <div className="flex flex-row justify-between border-b-2 px-2 ">
                            <h1 className=' lg:text-xl '>Average Draft Position Dynasty:  </h1>
                            <h1 className=' lg:text-xl '>{data.AverageDraftPositionDynasty} </h1>
                        </div>
                        <div className="flex flex-row justify-between border-b-2 px-2 ">
                            <h1 className=' lg:text-xl '>Bye Week:  </h1>
                            <h1 className=' lg:text-xl '>{data.ByeWeek} </h1>
                        </div>
                    </div>
                    <div className="flex flex-row w-full  lg:text-3xl pb-5 justify-evenly py- md:px-5 text-white pt-8">
                        <Link href={"/research/player"} className="bg-lime-500 rounded-full p-1 lg:p-3 hover:border hover:border-lime-500 hover:text-lime-500 hover:bg-white hover:underline">Back to Players </Link>
                        <Link href={'#topPlayer'} className="bg-lime-500 rounded-full p-1 lg:p-3 hover:border hover:border-lime-500 hover:text-lime-500 hover:bg-white hover:underline">Back to Top </Link>
                    </div>
                </div>
                <SideCol/>
            </div>
        </main>
    )
}

export default Player;