import Link from "next/link";
import MissingPersonIcon from "../../../public/svgs/missing_person_icon";


const getADPData = async () => {
    const res = await fetch(`https://www.thefantasyflyer.com/api/research/adp`, {
        cache: 'no-store',
    });
    if(!res.ok){
        throw new Error('Failed')
    }
    return res.json()
};


export default async function ResearchADP(  )  {
    const data = await getADPData()
    
    return (
        <div className='flex flex-col w-full bg-white gap-5 px-8' >
             <div  className="flex flex-row w-full border border-lime-500 rounded-full items-center justify-evenly pl-5 "  id="topList">
                    <div className="w-10 h-10 stroke-lime-400"><MissingPersonIcon /></div>
                    <div className="flex flex-row gap-3 text-sm md:text-lg text-black  w-full justify-between px-6 md:px-10 lg:px-16 ">
                        <h1>ADP</h1>
                        <h1>Round ADP</h1>
                        <h1>Name</h1>
                        <h1>Position</h1>
                        <h1>Team</h1>
                    </div>
                </div>
            
            {data[0].players.map((player: any)=>(
                <Link href={`/research/players/${player.name}`} className="flex flex-row w-full border border-lime-500 rounded-full items-center justify-between pl-5 " key={player.player_id} id="topList">
                    <div className="w-10 h-10 stroke-lime-400"><MissingPersonIcon /></div>
                    <div className="flex flex-row gap-3 text-lg text-black  w-full justify-evenly  items-center">
                        <h1 className=" w-1/12">{player.adp}</h1>
                        <h1  className=" w-1/12">{player.adp_formatted}</h1>
                        <h1 className=" w-1/4">{player.name}</h1>
                        <h1 className=" w-1/12">{player.position}</h1>
                        
                        
                        
                        <h1>{player.team}</h1>
                    </div>
                </Link>
            ))}
        </div>
    )

}