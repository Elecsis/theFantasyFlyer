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

export default async function MainCategories() {
    
    const data = await getData();

    return (
        <div className='w-full md:px-10'>
            <div className='w-full text-center md:text-left'>
                <h1 className='font-semibold text-2xl py-6 md:pt-14  md:pb-10 md:text-left '>Categories</h1>
            </div> 
            <div className='grid grid-cols-1 gap-4 w-full  sm:grid-cols-2 md:grid-cols-4  px-10 lg:px-0 lg:text-sm '>
                {data?.map((mainCat:any)=> (
                    <Link href={`/news?cat=${mainCat.title}`} key={mainCat._id} className={`${mainCat.color} md:w-full  p-2 rounded-md text-white text-center shadow-xl`}>{mainCat.title}</Link>
                ))}
            </div>
        </div>
    ) 
}