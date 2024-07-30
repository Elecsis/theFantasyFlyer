
'use client'
import Link from "next/link";
import { useState } from "react";


export default  function PostShow() {

    const [title, setTitle] = useState('');
    const [vidURL, setVidURL] = useState('');


    const handleSubmit = async () => {
        console.log('started')
        const res = await fetch(
            "https://www.thefantasyflyer.com/api/show",{
                method: "POST",
                body: JSON.stringify({
                    title: title ,
                    vidURL: vidURL
                }),
            }
            
        )
        console.log(res);
        setTitle('');
        setVidURL('');
    }

    return (
        <main className="flex flex-col w-full h-full bg-lime-500 border border-white border-t-2 border-b-2  text-black justify-center p-20 items-center">
       
            <div className="flex h-auto w-[65%] rounded-lg bg-white text-center  flex-col justify-evenly  p-10 gap-5">
                <h1 className="pb-[8%] text-2xl">Post New Show</h1>
                <input className="px-5 text-2xl rounded-lg  border border-lime-500" type="text" placeholder="Title" onChange={ e => setTitle(e.target.value)}/>
                <input className="px-5 text-2xl rounded-lg border border-lime-500" type="text" placeholder="YouTube Url" onChange={ e => setVidURL(e.target.value)}/>
                <div className="flex pt-10 w-full justify-center">
                    <button onClick={handleSubmit}  className="bg-white text-black border border-lime-500 hover:bg-lime-600 self-center py-2 px-4 rounded h-12 w-[33%] ">
                        Publish
                    </button>
                </div>
            </div> 
            <div className="flex pt-10 w-full justify-center">
                <Link  href={'/admin'} className="bg-white text-black border text-center border-lime-500 hover:bg-lime-600 self-center py-2 px-4 rounded-full h-12 w-[33%] items-center">
                    Back to Admin
                </Link>
            </div>
        </main>
    )
}
