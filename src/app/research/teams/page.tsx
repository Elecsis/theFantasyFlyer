import React from "react";
import ResearchHero from "../../componets/ResearchHero";
import ResearchTeams from "../../componets/ResearchTeams";
import Link from "next/link";


export default function Research() {
    return (
        <main className="w-screen h-auto flex flex-col ">
            <ResearchHero/>
            <div className="py-8  bg-white  text-black flex flex-row justify-center gap-10">
                <h1>Teams</h1>
                <Link className="hover:underline  bg-white  text-black" href={"/research/players"}> Players</Link>
            </div>
            <ResearchTeams/>
        </main>
    )
}