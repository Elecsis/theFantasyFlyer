import Link from "next/link";
import Image from 'next/image';

const getData = async () => {
    const res = await fetch(`https://www.thefantasyflyer.com/api/research/teams`, {
        cache: 'no-store',
    });
    if(!res.ok){
        throw new Error('Failed')
    }
    return res.json()
};

const ResearchTeams = async () => {
   
    const data = await getData()

    return (
        <div className='grid grid-cols-2 md:grid-cols-4 w-full bg-white gap-5 px-8 pb-10'>
            {data?.map((team: any)=>(
                <div className=' flex  rounded-lg '  key={team.Key}>
                    
                    <div className='flex flex-col  w-full  shadow-lg rounded-lg text-black gap-3 items-center'>
                        {team.WikipediaLogoURL && ( <Link  className='h-[100px] w-[100px] relative aspect-square bg-white  rounded-l-lg ' href={`/research/teams/${team.Key}`}>
                                <Image
                                src={team.WikipediaLogoURL}
                                alt='Football field and stadium at the 50 yard line'
                                fill
                                className='w-full h-full  rounded-l-lg'
                                />
                        </Link>)}
                        <div className="flex flex-row w-full pr-3">
                            <div className="flex flex-col w-full ">
                                <div className="flex flex-col lg:flex-row gap-3 text-lg items-center font-semibold w-full justify-center">
                                    <h1>{team.City}</h1>
                                    <h1>{team.Name}</h1>
                                    {/* <h1> Bye: {team.ByeWeek}</h1> */}
                                </div>
                                {/* <div className="flex flex-row justify-between text-xs">
                                    <h1> Conf: {team.Conference}</h1>
                                    <h1> Division: {team.Division}</h1>
                                    
                                    <h1> Coach: {team.HeadCoach}</h1>
                                </div>
                                <div className="flex flex-row justify-between text-xs">
                                    <h1> OC: {team.OffensiveCoordinator}</h1>
                                    <h1> DC: {team.DefensiveCoordinator}</h1>
                                </div>
                                <div className="flex flex-row justify-between text-xs">
                                    <h1> Offensive Scheme: {team.OffensiveScheme}</h1>
                                    <h1> Defensive Scheme: {team.DefensiveScheme}</h1>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default ResearchTeams