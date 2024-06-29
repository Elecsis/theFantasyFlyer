"use client"

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";
//import Image from 'next/image';

const fetcher = async (url: any) => {
    const res = await fetch(url)
    const data = await res.json()
    if (!res.ok){
        const error = new Error(data.message)
        throw error
    }
    return data
}



const Comments = ({postSlug}: any) => {

    
    
    const {status} = useSession()
   
    const {data, mutate,  isLoading} = useSWR(`https://www.thefantasyflyer.com/api/comments?postSlug=${postSlug}`, fetcher)

    const handleSubmit = async () => {
        console.log(desc , postSlug)
        await fetch(
            "https://www.thefantasyflyer.com/api/comments",{
                method: "POST",
                body: JSON.stringify({desc, postSlug}),
            }
        )
        mutate();
    }

    const [desc, setDesc] = useState('')

    return (
       <div className="w-full">
            <div className="w-full  pt-16 pb-10 flex flex-col">
                <h1 className="text-stone-600 text-3xl pb-10">Comments</h1>
                {status === "authenticated" ? (
                    <div className="flex flex-col md:flex-row h-36 w-full">
                        <textarea className="md:w-[85%]  h-full border" onChange={(e)=> setDesc(e.target.value)}/>
                        <div className="w-[50%] md:w-[15%] flex flex-col justify-center pt-10 md:pt-0 md:px-6">
                             <button  onClick={handleSubmit} className=" bg-lime-500 hover:bg-lime-800 p-2 rounded-md text-white h-10 text-center ">Send</button>
                        </div>
                    </div>
                ) : (
                    <Link href={'/login'}  className="text-lime-500  hover:underline"> Login to write a comment</Link>
                )}
                
                {/* <div className="flex flex-col md:flex-row h-36 w-full">
                        <textarea className="md:w-[85%]  h-full border" onChange={(e)=> setDesc(e.target.value)}/>
                        <div className="w-[50%] md:w-[15%] flex flex-col justify-center pt-10 md:pt-0 md:px-6">
                             <button   onClick={handleSubmit} className=" bg-lime-500 hover:bg-lime-800 p-2 rounded-md text-white h-10 text-center ">Send</button>
                        </div>
                    </div> */}
                
                
            </div>

            <div className="flex flex-col gap-5">
                {isLoading
                ?"Loading" 
                : data?.map((item: any) => (
                    <div className="flex flex-col" key={item._id}>
                        <div className="text-stone-600">
                            <h2 className="">{item.user.name}</h2>
                            <h3 className="text-xs">{item.createdAt.substring(0,16)}</h3>
                        </div>
                        <div className="text-left pt-2">{item.desc}</div>
                    </div>
                ))}
                
            
            </div>
        </div>
    )

}

export default Comments;