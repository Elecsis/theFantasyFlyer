import Link from "next/link";
import Image from 'next/image';
import Pagination from "./Pagination";

const getData = async (page: any, cat : any) => {
    const res = await fetch(`https://www.thefantasyflyer.com/api/posts?page=${page}&cat=${cat || ''}`, {
        cache: 'no-store',
    });
    if(!res.ok){
        throw new Error('Failed')
    }
    return res.json()
};

export default async function CardList( page: any, cat: any  ) {
    
    const data = await getData(page.page, page.cat);
    const POST_PER_PAGE = 5;
    const hasPrev = POST_PER_PAGE * ( page.page - 1) > 0;
    const hasNext = POST_PER_PAGE * ( page.page - 1) + POST_PER_PAGE < data.count;
    const pageNum = page.page
    const cato = page.cat
    const paginationProp = {
        next: {hasNext},
        prev: {hasPrev},
        page: {pageNum},
        cat:  {cato}
    }
   

    return (
        <div className='flex flex-col w-full gap-10 md:pl-10 lg:pl-0'>
            { data.posts?.map((item:any)=> (
            <div className=' flex flex-col md:flex-row  ' key={`item._id`}>
                <div className='hidden md:block aspect-square md:h-72 relative bg-lime-500 '>
                    <Image
                    src='/images/coquiIcon.jpg'
                    alt='Football field and stadium at the 50 yard line'
                    fill
                    className='w-full h-full object-cover '
                    />
                </div>
                <div className='flex flex-col justify-between w-full md:px-10  '>
                    <div className="flex flex-row w-full gap-9 ">
                        <h3 className='text-black text-xl self-center'>{item.createdAt.substring(0,10)}</h3>
                        <div className='bg-lime-500 w-[40%]  lg:w-[30%] p-1 rounded-full self-center  text-center text-white'>{item.catSlug}</div>
                    </div>
                    <h1 className=' text-xl font-semibold'>{item.title}</h1>
                    <p className='text-md  '>{item.desc}</p>
                    <Link href={"/blog"} className="underline hover:text-lime-800 underline-offset-4 rounded-md text-lime-500 w-24 text-center ">Read More</Link>
                </div>
            </div>
            ))}
            <Pagination page={paginationProp} />
        </div>
    )

}