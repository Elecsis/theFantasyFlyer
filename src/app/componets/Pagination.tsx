"use client"
import { useRouter } from "next/navigation";

const Pagination = ( page: any )=> {

    const hasNext = page.page.next.hasNext
    const hasPrev = page.page.prev.hasPrev
    const pageNum = page.page.page.pageNum
    const cat= page.cat
    const router = useRouter()

    return (
        <div className='flex flex-row w-full justify-between  pt-14 lg:pl-10 lg:pr-20'>
            <button 
                onClick={()=> router.push(`?page=${pageNum - 1}&cat=${cat||''}#posts`)} 
                className='bg-lime-500 hover:bg-lime-800 p-2 rounded-md text-white w-24 text-center disabled:bg-neutral-500'
                disabled={!hasPrev}
                >Previous</button>
            <div className="flex flex-row gap-5 items-center">
            {hasPrev &&(
                <div  onClick={()=> router.push(`?page=${pageNum - 1}&cat=${cat||''}#posts`)} className="hover:text-lime-500">{pageNum -1}</div>
            )}
            {<div className="text-xl underline underline-offset-4">{pageNum}</div>}
            {hasNext &&(
                <div onClick={()=> router.push(`?page=${pageNum + 1}&cat=${cat|| ''}#posts`)} className="hover:text-lime-500">{pageNum +1}</div>
            )}  
            </div>
            <button 
                onClick={()=> router.push(`?page=${pageNum + 1}&cat=${cat|| ''}#posts`)} 
                className='bg-lime-500 hover:bg-lime-800 p-2 rounded-md text-white w-24 text-center disabled:bg-neutral-500'
                disabled={!hasNext}
                >Next</button>
        </div>
    )

}

export default Pagination;