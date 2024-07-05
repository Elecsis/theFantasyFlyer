import React from "react";
import ResearchHero from "../componets/ResearchHero";
import ResearchTeams from "../componets/ResearchTeams";


export default function Research() {
    return (
        <main className="w-screen h-auto">
            <ResearchHero/>
            <div className="h-20 w-screen bg-white  text-black"> Teams</div>
            <ResearchTeams/>
        </main>
    )
}