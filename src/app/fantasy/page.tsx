import React from "react";
import ComingSoon from "../componets/CoomingSoon";
import FantasyHero from "../componets/FantasyHero";
import { SideCol } from "../componets/SideCol";

export default function Fantasy() {
    return (
            <main className="flex flex-col w-full h-auto bg-white border border-white border-t-2 border-b-2  text-black justify-center   ">
            <FantasyHero/>
            <div className='flex flex-col w-full lg:flex-row lg:pr-10 '>
                    <div className='lg:w-4/5 flex flex-col'>
                    <div className="w-full h-full bg-lime-500 text-white text-center p-20 text-5xl flex flex-col justify-center"> COMING SOON</div>
                    </div>
                    <SideCol/>
                    
                </div>
        </main>
    )
}