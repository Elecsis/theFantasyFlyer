'use client'
import React from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from 'next/link';


export default function Write() {

    // const { status } = useSession();
    // const router = useRouter();

    // if(status === "loading"){
    //     return <div className="w-screen h-screen">Loading .....</div>
    // }    

    // if(status === "unauthenticated"){
    //     router.push('/login')
    // }  

    return (
       <main className='h-screen w-screen bg-lime-500'>
        <div className='flex flex-row h-full w-full'>
            <div className='h-full w-1/5 bg-white flex flex-col py-5 items-center gap-5 border  border-y-lime-500'>
                <Link className="w-[90%] text-center bg-lime-500 rounded-full p-2 lg:p-3 hover:border hover:border-lime-500 hover:text-lime-500 hover:bg-white " href={"/admin/write"}>Write Post</Link>
                <Link className="w-[90%] text-center bg-lime-500 rounded-full p-2 lg:p-3 hover:border hover:border-lime-500 hover:text-lime-500 hover:bg-white " href={"/admin/write"}>Change Featured Post</Link>
                <Link className="w-[90%] text-center bg-lime-500 rounded-full p-2 lg:p-3 hover:border hover:border-lime-500 hover:text-lime-500 hover:bg-white " href={"/admin/write"}>Editor's Post</Link>
                <Link className="w-[90%] text-center bg-lime-500 rounded-full p-2 lg:p-3 hover:border hover:border-lime-500 hover:text-lime-500 hover:bg-white " href={"/admin/write"}>Adjust Player Rankings</Link>
                <Link className="w-[90%] text-center bg-lime-500 rounded-full p-2 lg:p-3 hover:border hover:border-lime-500 hover:text-lime-500 hover:bg-white " href={"/admin/write"}>FFC Player ADP</Link>
            </div>
            <div className='w-full h-full flex flex-col items-center'>
                <div className=''>Current Featured Post</div>
                <div className=''>Current List of Editor's Post</div>
                <div className=''>Current Player Rankings</div>
            </div>
        </div>
       </main>
    );
}