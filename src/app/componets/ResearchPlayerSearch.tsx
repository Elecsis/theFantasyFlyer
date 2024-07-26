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
        <div className="bg-white flex flex-row w-full border border-lime-500 rounded-full items-center h-12 text-black p-4">
            <input 
                type={text}
                placeholder="Search...." 
                className="w-full pl-3 focus:accent-lime-500"
                onChange={ e => setText(e.target.value)}
            />
        </div>
    ) 
}