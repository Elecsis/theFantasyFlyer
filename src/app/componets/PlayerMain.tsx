
import Link from "next/link";
import { SideCol } from "./SideCol";

export default async function PlayerMain( { data, adpData, playerName }: any ) {

    return (
        
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
                        {adpData[1].players.map((player: any)=>{
                            if(player.name === playerName) {
                                return(
                                    <div className="flex flex-row justify-between border-b-2 px-2 ">
                                        <h1 className=' lg:text-xl '>Average Draft Position PPR:  </h1>
                                        <h1 className=' lg:text-xl '>{player.adp} </h1>
                                    </div>
                                )
                            } 
                        })}
                        {adpData[0].players.map((player: any)=>{
                            if(player.name === playerName) {
                                return(
                                    <div className="flex flex-row justify-between border-b-2 px-2 ">
                                        <h1 className=' lg:text-xl '>Average Draft Position Standard:</h1>
                                        <h1 className=' lg:text-xl '>{player.adp} </h1>
                                    </div>
                                )
                            } else {
                                <div className="flex flex-row justify-between border-b-2 px-2 ">
                                    <h1 className=' lg:text-xl '>Average Draft Position PPR:  </h1>
                                    <h1 className=' lg:text-xl '>No ADP</h1>
                                </div>
                            }
                        })}
                        {adpData[2].players.map((player: any)=>{
                            if(player.name === playerName) {
                                return(
                                    <div className="flex flex-row justify-between border-b-2 px-2 ">
                                        <h1 className=' lg:text-xl '>Average Draft Position 2QB:</h1>
                                        <h1 className=' lg:text-xl '>{player.adp} </h1>
                                    </div>
                                )
                            } else {
                                <div className="flex flex-row justify-between border-b-2 px-2 ">
                                    <h1 className=' lg:text-xl '>Average Draft Position PPR:  </h1>
                                    <h1 className=' lg:text-xl '>No ADP</h1>
                                </div>
                            }
                        })}
                        {adpData[3].players.map((player: any)=>{
                            if(player.name === playerName) {
                                return(
                                    <div className="flex flex-row justify-between border-b-2 px-2 ">
                                        <h1 className=' lg:text-xl '>Average Draft Position Dynasty:</h1>
                                        <h1 className=' lg:text-xl '>{player.adp} </h1>
                                    </div>
                                )
                            } else {
                                <div className="flex flex-row justify-between border-b-2 px-2 ">
                                    <h1 className=' lg:text-xl '>Average Draft Position PPR:  </h1>
                                    <h1 className=' lg:text-xl '>No ADP</h1>
                                </div>
                            }
                        })}
                        {adpData[1].players.map((player: any)=>{
                            if(player.name === playerName) {
                                return(
                                    <div className="flex flex-row justify-between border-b-2 px-2 ">
                                        <h1 className=' lg:text-xl '>Bye Week:  </h1>
                                        <h1 className=' lg:text-xl '>{player.bye} </h1>
                                    </div>
                                )
                            } 
                        })}
                    </div>
                    <div className="flex flex-row w-full  lg:text-3xl pb-5 justify-evenly py- md:px-5 text-white pt-8">
                        <Link href={"/research/player"} className="bg-lime-500 rounded-full p-1 lg:p-3 hover:border hover:border-lime-500 hover:text-lime-500 hover:bg-white hover:underline">Back to Players </Link>
                        <Link href={'#topPlayer'} className="bg-lime-500 rounded-full p-1 lg:p-3 hover:border hover:border-lime-500 hover:text-lime-500 hover:bg-white hover:underline">Back to Top </Link>
                    </div>
                </div>
                <SideCol/>
            </div>
    
    )

}