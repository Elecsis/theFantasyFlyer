
import Link from 'next/link'

const getData = async () => {
    const res = await fetch('https://www.thefantasyflyer.com/api/categories', {
        cache: 'no-store',
    });
    if(!res.ok){
        throw new Error('Failed')
    }
    return res.json()
};

export default async function SideCategories() {
    
    const data = await getData();

    return (
        <div className=' text-left md:w-full flex flex-col pt-10 md:pt-14 '>
        <h3 className='text-xs text-stone-400'>Discover by topic</h3>
        <h1 className='font-semibold text-2xl pb-6  md:pb-4  '>Categories</h1>
            <div className='grid  gap-4 w-full  grid-cols-2 md:grid-cols-2 lg:grid-cols-1 lg:text-lg'>
                {data?.map((item:any)=> (
                    <Link href={`/news?cat=${item.title}`} key={item._id} className={`${item.color} md:w-full  p-2 rounded-full text-white text-center`}>{item.title}</Link>
                ))}
            </div>
        </div>
    ) 
}