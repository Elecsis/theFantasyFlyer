import React from "react";
import Link from "next/link";
import ResearchADPMain from "@/app/componets/ResearchADPMain";
import ResearchHero from "@/app/componets/ResearchHero";


export default function ResearchADP() {
    

    return (
        <main className="w-screen h-auto">
            <ResearchHero/>
            <div className="py-8  bg-white  flex flex-row justify-center gap-10" >
                <Link className="w-24 text-center bg-lime-500 rounded-full p-2 lg:p-3 hover:border hover:border-lime-500 hover:text-lime-500 hover:bg-white hover:underline" href={"/research/teams"}>Teams</Link>
                <Link className="w-24 text-center bg-lime-500 rounded-full p-2 lg:p-3 hover:border hover:border-lime-500 hover:text-lime-500 hover:bg-white hover:underline" href={"/research/players"}>Players</Link>
                <h1 className="w-24 text-center border border-lime-500 text-lime-500 rounded-full p-2 lg:p-3">ADP</h1>
            </div>
            <h1 className=" text-center bg-white text-lime-500 text-3xl pb-5">Powered by: Fantasy Football Calculater</h1>
            <ResearchADPMain/>
        </main>
    )
}