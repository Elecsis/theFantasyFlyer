import React from "react";
import ResearchHero from "../../componets/ResearchHero";
import ResearchTeams from "../../componets/ResearchTeams";
import Link from "next/link";


export default function Research() {
    return (
        <main className="w-screen h-auto flex flex-col ">
            <ResearchHero/>
            <div className="py-8  bg-white  flex flex-row justify-center gap-10">
                <h1 className="w-24 text-center border border-lime-500 text-lime-500 rounded-full p-2 lg:p-3 ">Teams</h1>
                <Link className="w-24 text-center bg-lime-500 rounded-full p-2 lg:p-3 hover:border hover:border-lime-500 hover:text-lime-500 hover:bg-white hover:underline" href={"/research/players"}> Players</Link>
            </div>
            <ResearchTeams/>
        </main>
    )
}