'use client'
import { useState, useEffect } from 'react';
import Link from "next/link";
import MissingPersonIcon from "../../../public/svgs/missing_person_icon";



export default  function RankingsMain({data}: any) {
    const [selectedList, setSelectedList] = useState<string>('QB');

    const handleListChange = (list: string) => {
        setSelectedList(list);
    };

    const renderPlayers = (players: any) => {
        return players.map((player: any) => (
            <Link href={`/research/players/${player.name}?player=${player.name}`} className="flex flex-row w-full border border-lime-500 rounded-full items-center justify-between pl-5" key={player.name} id="topList">
                <div className="w-10 h-10 stroke-lime-400"><MissingPersonIcon /></div>
                <div className="flex flex-row gap-3 text-lg text-black w-full justify-evenly items-center">
                    <h1 className='w-[25%]'>{player.name}</h1>
                    <h1 >{player.position}</h1>
                    <h1>{player.team}</h1>
                    <h1>{player.rank}</h1>
                </div>
            </Link>
        ));
    };

    const selectedData = () => {
        switch (selectedList) {
            case 'QB':
                return data.playerQB || [];
            case 'WR':
                return data.playerWR || [];
            case 'RB':
                return data.playerRB || [];
            case 'TE':
                return data.playerTE || [];
            case 'DEF':
                return data.playerDEF || [];
            case 'TEAMS':
                return data.teams || [];
            default:
                return [];
        }
    };

    return (
        <div className='flex flex-col w-full bg-white pt-5 gap-5 px-8'>
            <div className="flex justify-evenly my-4 w-full">
                {['QB', 'WR', 'RB', 'TE', 'DEF', 'TEAMS'].map((list) => (
                    <div
                        key={list}
                        onClick={() => handleListChange(list)}
                        className={`w-24 text-center rounded-full p-2 lg:p-3 cursor-pointer ${
                            selectedList === list
                                ? 'bg-white text-lime-500 border border-lime-500'
                                : 'bg-lime-500 text-white hover:border hover:border-lime-500 hover:text-lime-500 hover:bg-white hover:underline'
                        }`}
                    >
                        {list}
                    </div>
                ))}
            </div>
            <div className="flex flex-row w-full border border-lime-500 rounded-full items-center justify-evenly pl-5" id="topList">
                <div className="w-10 h-10 stroke-lime-400"><MissingPersonIcon /></div>
                <div className="flex flex-row gap-3 text-sm md:text-lg text-black w-full justify-evenly px-6 md:px-10 lg:px-16">
                    
                    <h1 className='w-[25%]'>Name</h1>
                    <h1>Position</h1>
                    <h1>Team</h1>
                    <h1>Rank #</h1>
                </div>
            </div>
            {renderPlayers(selectedData())}
        </div>
    )

}
