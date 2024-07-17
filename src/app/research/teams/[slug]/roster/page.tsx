import React from "react";
import Image from 'next/image'
import { SideCol } from "@/app/componets/SideCol";
import Link from "next/link";

const getTeamData = async ( {slug}: any) => {
    const team = `https://www.thefantasyflyer.com/api/research/teams/${slug}/roster` 
    const res = await fetch(team, {
        cache: 'no-store',
    });
    if(!res.ok){
        throw new Error('Failed')
    }
    return res.json()
};




const TeamRoster = async( {params}: any) => {
    const slug = params 
   
    const data = await getTeamData(slug)
    
    return (
        <main className="bg-white text-black" id='topteam'>

            <div className=' flex flex-col-reverse sm:flex-row lg:pt-16 w-screen px-10'>
                <div className='flex flex-col justify-between pt-10 sm:w-1/2 md:pr-10 pb-5'>
                    <h1 className=' text-xl font-semibold'>{data[1].City} </h1>
                    <h1 className=' text-3xl font-semibold'>{data[1].Name} </h1>

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
               
                <div className=' lg:w-4/5 flex flex-col md:pt-10 lg:pt-20 lg:pr-10 '>
                    <div className="flex flex-row w-full  lg:text-3xl pb-5 justify-between md:px-5 text-white">
                    <Link href={`/research/teams/${slug.slug}`} className="bg-lime-500 rounded-full p-1 lg:p-3 ">Basic Team Info</Link>
                        <h1 className="bg-lime-500 rounded-full p-1 lg:p-3 underline">Roster</h1>
                        <h1 className="bg-lime-500 rounded-full p-1 lg:p-3 ">Schedule</h1>
                        <h1 className="bg-lime-500 rounded-full p-1 lg:p-3 ">Notes</h1> 
                    </div>
                    <div className="flex flex-col justify-evenly h-full border rounded-xl border-lime-500 ">
                        {data[0]?.map((player: any)=>(
                            <div className=' flex flex-row rounded-lg '  key={player.PlayerID}>
                                
                                <div className='flex flex-row  w-full  drop-shadow-lg rounded-lg text-black gap-3'>
                                    {/* {player.UsaTodayHeadshotUrl&& ( <Link  className='h-[100px] w-[100px] relative aspect-square bg-white shadow-lg rounded-l-lg ' href={`/`}>
                                            <Image
                                            src={player.UsaTodayHeadshotUrl}
                                            alt='Football field and stadium at the 50 yard line'
                                            fill
                                            className='w-full h-full  rounded-l-lg'
                                            />
                                    </Link>)} */}
                                    <div className="flex flex-row w-full px-5 py-2 ">
                                        <div className="flex flex-col w-full ">
                                            <div className="flex flex-row gap-3 text-lg font-semibold ">
                                                <h1>{player.Name}</h1>
                                                <h1>{player.Team}</h1>
                                                <h1>{player.Position}</h1>
                                            </div>
                                            <div className="flex flex-row justify-between text-xs">
                                                <h1> Height: {player.HeightFeet} {player.HeightInches}</h1>
                                                <h1> Division: </h1>
                                                
                                            
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                       
                    </div>
                    <div className="flex flex-row w-full  lg:text-3xl pb-5 justify-evenly py- md:px-5 text-white pt-8">
                        <Link href={"/research/teams"} className="bg-lime-500 rounded-full p-1 lg:p-3 hover:underline">Back to Teams </Link>
                        <Link href={'#topteam'} className="bg-lime-500 rounded-full p-1 lg:p-3 hover:underline">Back to Top </Link>
                    </div>
                </div>
                <SideCol/>
            </div>
        </main>
    )
}

export default TeamRoster;