import Link from "next/link";
import Image from 'next/image';
import Pagination from "./Pagination";
import { normalize } from "path";

const getData = async (page: any, cat : any) => {
    const res = await fetch(`https://www.thefantasyflyer.com/api/posts?page=${page}&cat=${cat || ''}`, {
        cache: 'no-store',
    });
    if(!res.ok){
        throw new Error('Failed')
    }
    return res.json()
};

const getCategoryColorClass = (catSlug: string) => {
   
    const normalizedSlug = normalize(catSlug);
    const categoryColors: { [cat: string]: string } = {
        'News': 'bg-rose-500',
        'Blog': 'bg-lime-500',
        'Match-Ups': 'bg-sky-500',
        'Start/Sit': 'bg-amber-500',
        'The Waiver Wire': 'bg-emerald-500',
        'Draft Strategies': 'bg-cyan-500',
        'Team Analysis': 'bg-fuchsia-500',
        'Player Rankings': 'bg-stone-500'
    };

    return categoryColors[normalizedSlug] || 'bg-gray-500'; // Default color if catSlug doesn't match
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
        <div className='flex flex-col w-full gap-10 md:pl-10 lg:pl-0 lg:pr-10'>
        { data.posts?.map((post:any)=> (
            <div className=' flex flex-col md:flex-row rounded-lg' key={post._id}>
            {post.img && ( <Link  className='hidden md:block aspect-square md:h-72 relative bg-lime-500 shadow-lg rounded-l-lg' href={`/blog/${post.slug}`}>
                    <Image
                    src={post.img}
                    alt='Football field and stadium at the 50 yard line'
                    fill
                    className='w-full h-full object-cover  rounded-l-lg'
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </Link>)}
                <div className='flex flex-col justify-between w-full md:px-10  shadow-lg rounded-r-lg py-2'>
                    <div className="flex flex-row w-full justify-between p-3">
                        <h3 className='text-black text-lg  self-center '>{post.createdAt.substring(0,10)}</h3>
                        <div className={`w-[40%] lg:w-[30%] p-1 rounded-full self-center text-sm text-center text-white ${getCategoryColorClass(post.catSlug)}`}>{post.catSlug}</div>
                    </div>
                    
                    <h1 className='p-3  font-semibold'>{post.title}</h1>
                    <div className="p-3 md:text-xs lg:text-lg" dangerouslySetInnerHTML={{ __html:post.desc.substring(0,150)}} />
                    <Link href={`/blog/${post.slug}`} className="underline hover:text-lime-800 underline-offset-4 rounded-md text-lime-500 w-24 text-center  pb-2">Read More</Link>
                </div>
            </div>
        ))}
        <Pagination page={paginationProp} cat={cato} />
    </div>
    )

}