import React from "react";
import ResearchHero from "../../componets/ResearchHero";
import Link from "next/link";
import ResearchPlayers from "@/app/componets/ResearchPlayers";


export default function Research() {
    return (
        <main className="w-screen h-auto">
            <ResearchHero/>
            <div className="py-8  bg-white  text-black flex flex-row justify-center gap-10">
                <Link className="hover:underline  bg-white  text-black" href={"/research/teams"}>Teams</Link>
                <h1>Players</h1>
            </div>
            <ResearchPlayers/>
        </main>
    )
}