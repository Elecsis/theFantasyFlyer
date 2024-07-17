import React from "react";
import Image from 'next/image'
import { SideCol } from "@/app/componets/SideCol";

const getTeamData = async ( {slug}: any) => {
    const team = `https://wwww.thefantasyflyer.com/api/research/teams/${slug}` 
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
   
    const data = await getTeamData(slug)
    console.log(data)
    
    return (
        <main className="bg-white text-black">

            <div className=' flex flex-col-reverse sm:flex-row lg:pt-16 w-screen px-10'>
                <div className='flex flex-col justify-between pt-10 sm:w-1/2 md:pr-10 pb-5'>
                    <h1 className=' text-xl font-semibold'>{data.City} </h1>
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

            <div className='flex flex-col w-full lg:flex-row px-10'>
                <div className='lg:w-4/5 flex flex-col'>
                   <div>
                   <h1 className=' lg:text-xl '>Conference:   {data.Conference} </h1>
                    <h1 className=' lg:text-xl '>Division:  {data.Division} </h1>
                    <h1 className=' lg:text-xl '>Head Coach:  {data.HeadCoach} </h1>
                    <h1 className=' lg:text-xl '>Offensive Coordinator:  {data.OffensiveCoordinator} </h1>
                    <h1 className=' lg:text-xl '>Defensive Coordinator: {data.DefensiveCoordinator} </h1>
                    <h1 className=' lg:text-xl '>Special Teams Coordinator:  {data.SpecialTeamsCoach} </h1>
                    <h1 className=' lg:text-xl '>Offensive Scheme:  {  data.OffensiveScheme} </h1>
                    <h1 className=' lg:text-xl '>Defensive Scheme:  {  data.DefensiveScheme} </h1>
                    <h1 className=' lg:text-xl '>Average Draft Position:  { data.AverageDraftPosition} </h1>
                    <h1 className=' lg:text-xl '>Average Draft Position PPR:  { data.AverageDraftPositionPPR} </h1>
                    <h1 className=' lg:text-xl '>Average Draft Position 2QB:  { data.AverageDraftPosition2QB} </h1>
                    <h1 className=' lg:text-xl '>Average Draft Position Dynasty:  { data.AverageDraftPositionDynasty} </h1>
                    <h1 className=' lg:text-xl '>Bye Week:  { data.ByeWeek} </h1>
                   </div>
                </div>
                <SideCol/>
            </div>
        </main>
    )
}

export default Team;