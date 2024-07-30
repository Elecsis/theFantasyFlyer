
'use client'
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
                }
            
            ),
            }
            
        )
        console.log(res);
        setTitle('');
        setVidURL('');
    }

    return (
        <main className="flex w-full h-full bg-lime-500 border border-white border-t-2 border-b-2  text-black justify-center p-20">
       
            <div className="flex h-auto w-[65%] rounded-lg bg-white text-center  flex-col justify-evenly ">
                <h1 className="pb-[8%] text-2xl">Post New Show</h1>
                <input className="px-5 text-2xl rounded-lg" type="text" placeholder="Title" onChange={ e => setTitle(e.target.value)}/>
                <input className="px-5 text-2xl rounded-lg" type="text" placeholder="YouTube Url" onChange={ e => setVidURL(e.target.value)}/>
                <div className="flex pt-10 w-full justify-center">
                <button onClick={handleSubmit}  className="bg-white text-black hover:bg-lime-600 self-center py-2 px-4 rounded h-12 w-[33%] border-solid border-white">
                    Publish
                </button>
            </div>
            </div> 
        </main>
    )
}
