import React from "react";
import ShowHero from "../componets/ShowHero";
import { SideCol } from "../componets/SideCol";

export default function Fantasy() {
    return (
        <main className="flex flex-col w-full h-auto bg-white border border-white border-t-2 border-b-2  text-black justify-center   ">
            <ShowHero/>
            <div className='flex flex-col w-full lg:flex-row px-5 sm:px-10'>
                    <div className='lg:w-4/5 flex flex-col'>
                        <div id='posts' className='w-full text-center md:text-left'>
                            <h1 className='font-semibold text-2xl py-6 md:pt-14  md:pb-10 md:text-left'>Recent shows</h1>
                        </div> 
                       <div className="flex flex-col lg:pr-16 h-full">
                            <div className="flex h-[330px] md:h-[550px] w-auto rounded-lg bg-white text-center  items-center flex-col justify-evenly drop-shadow-lg ">
                                <iframe className="rounded-lg object-cover " width="100%" height="100%" src="https://www.youtube.com/embed/Jfzb5Wvrazg?si=7HqRS--tvKvlCK9Z" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>
                                <h1 className="p-5 text-2xl">Episode #1 Mock Monday </h1>
                            </div> 
                       </div>
                    </div>
                    <SideCol/>
                </div>
        </main>
         
    )
    
}