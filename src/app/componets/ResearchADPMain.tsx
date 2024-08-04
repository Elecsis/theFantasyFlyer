'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";
import MissingPersonIcon from "../../../public/svgs/missing_person_icon";

interface Player {
    player_id: string;
    name: string;
    adp: number;
    adp_formatted: string;
    position: string;
    team: string;
    [key: string]: any;  // For other possible properties
}

interface ADPData {
    players: Player[];
}

const getADPData = async (): Promise<ADPData[]> => {
    const res = await fetch(`https://www.thefantasyflyer.com/api/adpFfc/player`, {
        cache: 'no-store',
    });
    if (!res.ok) {
        throw new Error('Failed');
    }
    return res.json();
};

export default function ResearchADP() {
    const [selectedList, setSelectedList] = useState<string>('PPR');
    const [data, setData] = useState<ADPData[]>([]);
    console.log(data);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getADPData();
            setData(result);
        };
        fetchData();
    }, []);

    const handleListChange = (list: string) => {
        setSelectedList(list);
    };

    const renderPlayers = (players: Player[]) => {
        return players.map((player) => (
            <Link href={`/research/players/${player.name}?player=${player.name}`} className="flex flex-row w-full border border-lime-500 rounded-full items-center justify-between pl-5" key={player.player_id} id="topList">
                <div className="w-10 h-10 stroke-lime-400"><MissingPersonIcon /></div>
                <div className="flex flex-row gap-3 text-lg text-black w-full justify-evenly items-center">
                    <h1 className="w-1/12">{player.adp}</h1>
                    <h1 className="w-1/12">{player.adp_formatted}</h1>
                    <h1 className="w-1/4">{player.name}</h1>
                    <h1 className="w-1/12">{player.position}</h1>
                    <h1>{player.team}</h1>
                </div>
            </Link>
        ));
    };

    const selectedData = (): Player[] => {
        switch (selectedList) {
            case 'PPR':
                return data[0]?.players || [];
            case 'Standard':
                return data[1]?.players || [];
            case '2QB':
                return data[2]?.players || [];
            case 'Dynasty':
                return data[3]?.players || [];
            default:
                return [];
        }
    };

    return (
        <div className='flex flex-col w-full bg-white gap-5 px-8'>
            <div className="flex justify-evenly my-4 w-full">
                {['PPR', 'Standard', '2QB', 'Dynasty'].map((list) => (
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
                <div className="flex flex-row gap-3 text-sm md:text-lg text-black w-full justify-between px-6 md:px-10 lg:px-16">
                    <h1>ADP</h1>
                    <h1>Round ADP</h1>
                    <h1>Name</h1>
                    <h1>Position</h1>
                    <h1>Team</h1>
                </div>
            </div>
            {renderPlayers(selectedData())}
        </div>
    );
}
