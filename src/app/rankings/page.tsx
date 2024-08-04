import React from "react";
import RankingsHero from "../componets/RankingsHero";
import RankingsMain from "../componets/RankingsMain";

const getRankingData =  async () => {
    const res = await fetch(`https://www.thefantasyflyer.com/api/rankings`, {
        cache: 'no-store',
    });
    if (!res.ok) {
        throw new Error('Failed');
    }
    return res.json();
};


export default async function Rankings() {


    const data = await getRankingData()
    return (
        <main className="">
            <RankingsHero/>
           <RankingsMain data={data}/>
        </main>
    )
}