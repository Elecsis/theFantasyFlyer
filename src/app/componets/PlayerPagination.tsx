"use client"
import { useRouter } from "next/navigation";

const PlayerPagination = ( prop: any )=> {

    const hasNext = prop.pageInfo.next.hasNext
    const hasPrev = prop.pageInfo.prev.hasPrev
    const pageNum = prop.pageInfo.page.page
    const search= prop.pageInfo.search
    const totalNumPages = Math.ceil(prop.pageInfo.count/30)
    const router = useRouter()

    return (
        <div className='flex flex-row w-full justify-between  pt-14 lg:pl-10 lg:pr-20'>
            <button 
                onClick={()=> router.push(`?page=${pageNum - 1}&search=${search||''}`)} 
                className='bg-lime-500  p-2 rounded-md text-white w-24 text-center disabled:bg-neutral-500'
                disabled={!hasPrev}
                >Previous</button>
            <div className="flex flex-row gap-5 items-center text-black">
                {pageNum > 2 &&(
                    <div  onClick={()=> router.push(`?page=${1}&search=${search||''}`)} className="hover:text-lime-500">1 ...</div>
                )}
                {hasPrev &&(
                    <div  onClick={()=> router.push(`?page=${pageNum - 1}&search=${search||''}`)} className="hover:text-lime-500">{pageNum -1}</div>
                )}
                {<div className="text-xl underline underline-offset-4">{pageNum}</div>}
                {hasNext &&(
                    <div onClick={()=> router.push(`?page=${pageNum + 1}&search=${search|| ''}`)} className="hover:text-lime-500">{pageNum +1}</div>
                )}  
                {pageNum < (totalNumPages - 1) &&(
                    <div  onClick={()=> router.push(`?page=${totalNumPages}&search=${search||''}`)} className="hover:text-lime-500">... {totalNumPages}</div>
                )}
            </div>
            <button 
                onClick={()=> router.push(`?page=${pageNum + 1}&search=${search|| ''}#topList`)} 
                className='bg-lime-500  p-2 rounded-md text-white w-24 text-center disabled:bg-neutral-500'
                disabled={!hasNext}
                >Next</button>
        </div> 
    )

}

export default PlayerPagination;