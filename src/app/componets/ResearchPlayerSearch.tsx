'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useDebounce } from 'use-debounce';


export default function ResearchPlayerSearch() {
    const router = useRouter( )
    const [text, setText] = useState('')
    const [query] = useDebounce(text, 700)

    useEffect(() => {
        if(!query){
            router.push(`/research/players?search=`)
        } else {
        router.push(`/research/players?search=${query}`)
        }
    },[query, router])
    
    return (
            <input 
                type={text}
                placeholder="Search...." 
                className="w-full pl-3 bg-white flex flex-row border border-lime-500 rounded-full items-center h-12 text-black p-4  focus:outline-none  focus:border-lime-500 focus:ring-1 focus:ring-lime-500"
                onChange={ e => setText(e.target.value)}
            />
    ) 
}