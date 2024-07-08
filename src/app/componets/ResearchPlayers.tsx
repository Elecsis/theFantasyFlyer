import Link from "next/link";
import Image from 'next/image';

const getData = async () => {
    const res = await fetch(`https://www.thefantasyflyer/api/research/players`, {
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
                <div className=' flex flex-row rounded-lg '  key={player.PlayerID}>
                    
                    <div className='flex flex-row  w-full  shadow-lg rounded-lg text-black gap-3'>
                        {/* {player.UsaTodayHeadshotUrl&& ( <Link  className='h-[100px] w-[100px] relative aspect-square bg-white shadow-lg rounded-l-lg ' href={`/`}>
                                <Image
                                src={player.UsaTodayHeadshotUrl}
                                alt='Football field and stadium at the 50 yard line'
                                fill
                                className='w-full h-full  rounded-l-lg'
                                />
                        </Link>)} */}
                        <div className="flex flex-row w-full pr-3 ">
                            <div className="flex flex-col w-full ">
                                <div className="flex flex-row gap-3 text-lg font-semibold ">
                                    <h1>{player.Name}</h1>
                                    <h1>{player.Team}</h1>
                                </div>
                                <div className="flex flex-row justify-between text-xs">
                                    <h1> H: {player.HeightFeet}</h1>
                                    <h1> Division: {player.HeightInches}</h1>
                                    
                                    <h1> Coach: </h1>
                                </div>
                                <div className="flex flex-row justify-between text-xs">
                                    <h1> OC: </h1>
                                    <h1> DC: </h1>
                                </div>
                                <div className="flex flex-row justify-between text-xs">
                                    <h1> Offensive Scheme: </h1>
                                    <h1> Defensive Scheme: </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default ResearchPlayers