import React from "react";
import ResearchHero from "../../componets/ResearchHero";
import Link from "next/link";
import ResearchPlayers from "@/app/componets/ResearchPlayers";


export default function Research({searchParams}: {searchParams: any}) {
    
    return (
        <main className="w-screen h-auto">
            <ResearchHero/>
            <div className="py-8  bg-white  flex flex-row justify-center gap-10">
                <Link className="w-24 text-center bg-lime-500 rounded-full p-2 lg:p-3 hover:border hover:border-lime-500 hover:text-lime-500 hover:bg-white hover:underline" href={"/research/teams"}>Teams</Link>
                <h1 className="w-24 text-center border border-lime-500 text-lime-500 rounded-full p-2 lg:p-3">Players</h1>
            </div>
            <ResearchPlayers searchParams={searchParams}/>
        </main>
    )
}