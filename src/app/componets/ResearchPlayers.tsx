import MissingPersonIcon from "../../../public/svgs/missing_person_icon";
import ResearchPlayerSearch from "./ResearchPlayerSearch";


const getData = async ( search: any) => {
    const res = await fetch(`https://www.thefantasyflyer.com/api/research/players?search=${search}`, {
        cache: 'no-store',
    });
    if(!res.ok){
        throw new Error('Failed')
    }
    return res.json()
};


const ResearchPlayers = async ({searchParams}: {searchParams: any}) => {
   
   const search = searchParams.search
    const data = await getData(search)
    
    return (
        <div className='flex flex-col w-full bg-white gap-5 px-8'>
            <ResearchPlayerSearch/>
            {data[0]?.map((player: any)=>(
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