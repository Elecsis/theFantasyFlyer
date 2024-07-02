
import React from "react";
import MainPostBody from "../componets/MainPostBody";


export default function News({searchParams}: {searchParams: any}) {

    const page = parseInt(searchParams.page) || 1;

    const  param = searchParams
    
    const cat = param.cat



   

    return (
        <main className=" bg-white text-black ">
            <div className="flex flex-col bg-lime-500 h-[170px] w-full text-white  text-center justify-center text-6xl">
                <h1 className="drop-shadow-lg">{`${cat || 'All Posts'}`}</h1>
            </div>
            <div className='flex flex-col w-full lg:flex-row px-5 lg:px-10'>
                <MainPostBody page={page} cat={cat} />
            </div>
        </main>
    )
}