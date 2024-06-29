"use client"
import { useRouter } from "next/navigation";

const Pagination = ( page: any )=> {
   
    const hasNext = page.page.next.hasNext
    const hasPrev = page.page.prev.hasPrev
    const pageNum = page.page.page.pageNum
    const router = useRouter()

    return (
        <div className='flex flex-row w-full justify-between  pt-14 pl-10 lg:pr-20'>
            <button 
                onClick={()=> router.push(`?page=${pageNum - 1}#posts`)} 
                className='bg-lime-500 hover:bg-lime-800 p-2 rounded-md text-white w-24 text-center disabled:bg-neutral-500'
                disabled={!hasPrev}
                >Previous</button>
            <button 
                onClick={()=> router.push(`?page=${pageNum + 1}#posts`)} 
                className='bg-lime-500 hover:bg-lime-800 p-2 rounded-md text-white w-24 text-center disabled:bg-neutral-500'
                disabled={!hasNext}
                >Next</button>
        </div>
    )

}

export default Pagination;