
import Link from "next/link";
import Image from 'next/image';
import MissingPersonIcon from "../../../public/svgs/missing_person_icon";

const getData = async () => {
    const res = await fetch(`https://www.thefantasyflyer.com/api/research/players`, {
        cache: 'no-store',
    });
    if(!res.ok){
        throw new Error('Failed')
    }
    return res.json()
};

const ResearchPlayers = async () => {
   
    const data = await getData()

   

    return (
        <div className='flex flex-col w-full bg-white gap-5 px-8'>
            {data?.map((player: any)=>(
                <div className="flex flex-row w-full border border-lime-500 rounded-full items-center justify-evenly pl-5 " key={player.PlayerID}>
                <div className="w-10 h-10 stroke-lime-400"><MissingPersonIcon /></div>
                <div className="flex flex-row gap-3 text-lg text-black  w-full justify-between px-14">
                <h1>{player.Position}</h1>
                    <h1>{player.Name}</h1>
                    <h1>{player.Team}</h1>
                </div>
            </div>
            ))}
        </div>
    )

}

export default ResearchPlayers