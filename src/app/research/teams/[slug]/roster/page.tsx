import React from "react";
import Image from 'next/image'
import { SideCol } from "@/app/componets/SideCol";
import Link from "next/link";
import MissingPersonIcon from "../../../../../../public/svgs/missing_person_icon";

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
                {data[1]?.WikipediaLogoURL && (<div className='w-full h-96 sm:w-1/2   relative bg-lime-500 rounded-lg'>
                    <Image
                        src={data[1].WikipediaLogoURL}
                        alt='Football field and stadium at the 50 yard line'
                        fill
                        className='w-full h-full  rounded-lg'
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority= {true }
                    />
                </div>)}
            </div>

            <div className='flex flex-col w-full lg:flex-row px-10 '>
               
                <div className=' lg:w-4/5 flex flex-col md:pt-10 lg:pt-20 lg:pr-10 ' id="teamInfoRoster">
                    <div className="flex flex-row w-full  lg:text-xl pb-5 justify-between pt-5 md:px-5 text-white">
                        <Link href={`/research/teams/${slug.slug}#teamInfoBasic`} className="bg-lime-500 rounded-full p-2 lg:p-3 hover:border hover:border-lime-500 hover:text-lime-500 hover:bg-white hover:underline">Basic Info</Link>
                        <h1 className="border border-lime-500 text-lime-500 rounded-full p-2 lg:p-3  ">Roster</h1>
                        <Link href={`/research/teams/${slug.slug}/schedule#teamInfoSchedule`} className="bg-lime-500 rounded-full p-2 lg:p-3 hover:border hover:border-lime-500 hover:text-lime-500 hover:bg-white hover:underline">Schedule</Link>
                    </div>
                    <div className="flex flex-col justify-evenly h-full border rounded-xl border-lime-500 p-10 gap-5">
                        {data[0]?.map((player: any)=>(
                            <Link href={`/research/players/${player.Name}?player=${player.Name}`} className="flex flex-row w-full border border-lime-500 rounded-full items-center justify-evenly pl-5 " key={player.PlayerID}>
                                <div className="w-10 h-10 stroke-lime-400"><MissingPersonIcon /></div>
                                <div className="flex flex-row gap-3 text-lg font-semibold  w-full justify-between px-14">
                                    <h1>{player.Name}</h1>
                                    <h1>{player.Position}</h1>
                                </div>
                            </Link>
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