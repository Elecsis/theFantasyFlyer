import React from "react";
import PlayerMain from "@/app/componets/PlayerMain";
import PlayerHead from "@/app/componets/PlayerHead";



const getADPData = async () => {
    const res = await fetch(`https://www.thefantasyflyer.com/api/adpFfc/player`, {
        cache: 'no-store',
    });
    if(!res.ok){
        throw new Error('Failed')
    }
    return res.json()
};

const getPlayerData = async ( slug: any) => {
    const player = `https://www.thefantasyflyer.com/api/research/players/${slug}` 
    const res = await fetch(player, {
        cache: 'no-store',
    });
    if(!res.ok){
        throw new Error('Failed')
    }
    return res.json()
};





const Player = async( {params}: any) => {
    
    const playerName = String(params.slug.replace(/%20/g, " "));
    const adpData = await getADPData()
    const playerData = await getPlayerData(playerName)
    return (
        <main className="bg-white text-black" id='topPlayer'>
            <PlayerHead data={playerData}/>
            <PlayerMain playerName={playerName} data={playerData} adpData={adpData} />
        </main>
    )
}

export default Player;
