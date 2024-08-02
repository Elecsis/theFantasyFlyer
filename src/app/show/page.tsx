import React from "react";
import ShowHero from "../componets/ShowHero";
import { SideCol } from "../componets/SideCol";

const getShowData = async () => {
    const res = await fetch(`https://www.thefantasyflyer.com/api/show`, {
        cache: 'no-store',
    });
    if(!res.ok){
        throw new Error('Failed')
    }
    return res.json()
};


export default async function Fantasy() {

    const showData = await getShowData();

    return (
        <main className="flex flex-col w-full h-auto bg-white border border-white border-t-2 border-b-2  text-black justify-center   ">
            <ShowHero/>
            <div className='flex flex-col w-full lg:flex-row px-5 '>
                    <div className="lg:w-4/5 pt-4 lg:pt-14">
                        <h1 className="text-center text-2xl font-semibold pt-5 pb-10">Recent Shows</h1>
                        <div className=' grid grid-rows-3 grid-flow-col gap-10  justify-evenly lg:pr-10'>
                            {showData.map((show: any)=> (
                                <div id='shows' className='w-full h-full text-center md:text-left ' key ={show.id}>
                                        <div className="h-full w-full flex rounded-lg bg-white text-center  items-center flex-col justify-evenly drop-shadow-lg ">
                                            <iframe className="rounded-lg object-cover " width="100%" height="100%" src={show.vidURL} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                            <h1 className="p-5 w-[80%]">{show.title} </h1>
                                        </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <SideCol/>
                </div>
        </main>
         
    )
    
}