import Link from "next/link";
import MissingPersonIcon from "../../../public/svgs/missing_person_icon";
import PlayerPagination from "./PlayerPagination";
import ResearchPlayerSearch from "./ResearchPlayerSearch";


const getData = async (page: any, search: any) => {
    const res = await fetch(`https://www.thefantasyflyer.com/api/research/players?page=${page}&search=${search}`, {
        cache: 'no-store',
    });
    if(!res.ok){
        throw new Error('Failed')
    }
    return res.json()
};


export default async function ResearchPlayers( {searchParams}: {searchParams: any} )  {
    const page = parseInt(searchParams.page) || 1;
    const search = searchParams.search
    const data = await getData(page, search)
    const count = data[1]
    const playersPerPage = 30;
    const hasPrev = playersPerPage * ( page - 1 ) > 0;
    const hasNext = playersPerPage * ( page - 1 ) + playersPerPage < count;
    const paginationProp = {
        next: {hasNext},
        prev: {hasPrev},
        page: {page},
        count: count, 
        search: search
    }
   
    
    return (
        <div className='flex flex-col w-full bg-white gap-5 px-8' >
            <ResearchPlayerSearch/>
            {data[0]?.map((player: any)=>(
                <Link href={`/research/players/${player.PlayerID}`} className="flex flex-row w-full border border-lime-500 rounded-full items-center justify-evenly pl-5 " key={player.PlayerID} id="topList">
                    <div className="w-10 h-10 stroke-lime-400"><MissingPersonIcon /></div>
                    <div className="flex flex-row gap-3 text-lg text-black  w-full justify-between px-14">
                    <h1>{player.Position}</h1>
                        <h1>{player.Name}</h1>
                        <h1>{player.Team}</h1>
                    </div>
                </Link>
            ))}
            <PlayerPagination  pageInfo={paginationProp}/> 
        </div>
    )

}