import Link from "next/link";
import { normalize } from "path";

const getData = async () => {
    const res = await fetch(`https://www.thefantasyflyer.com/api/popular`, {
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

    return categoryColors[normalizedSlug] || 'bg-gray-500'; 
};

export default  async function PopularPosts () {
    const data = await getData();
    return (
        <div className='w-full  text-left flex flex-col md:pt-14 md: lg:w-full'>
            <h3 className='text-xs text-stone-400'>What&apos;s hot</h3>
            <h1 className='font-semibold text-2xl pb-6  md:pb-6 '>Most Popular</h1>
            <div className='flex flex-col gap-4'>
                { data.map((popPost:any) => (
                    <div className='flex flex-col justify-between w-full ' key={popPost._id}>
                        <div className={`${getCategoryColorClass(popPost.catSlug)} text-xs w-[30%] rounded-full  text-center :`}>{popPost.catSlug}</div>
                        <Link href={`/blog/${popPost.slug}`} className="hover:underline hover:underline-offset-4 hover:decoration-lime-500     md:text-left  ">
                        <h1 className='py-2 text-lg md:text-base hover:text-lime-500 hover:underline-offset-4'>{popPost.title} </h1>
                        </Link>
                        <h3 className='text-stone-400 text-xs '>{popPost.createdAt.substring(0,10)}</h3>
                    </div>
                ))}
            </div>
        </div> 
    )
}