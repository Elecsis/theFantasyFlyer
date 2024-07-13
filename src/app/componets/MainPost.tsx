import Image from 'next/image'
import Link from 'next/link'

const getData = async () => {
    const res = await fetch(`https://www.thefantasyflyer.com/api/featured`, {
        cache: 'no-store',
    });
    if(!res.ok){
        throw new Error('Failed')
    }
    return res.json()
};


export default async function MainPost() {
    const data = await getData();

    return (
        <div className=' flex flex-col sm:flex-row pt-16 w-screen md:pr-10 px-10'>
            <div className=' h-fit  aspect-square w-full sm:w-1/2 relative bg-lime-500 '>
                <Image
                src={data[0].img}
                alt='Football field and stadium at the 50 yard line'
                fill
                className='w-full h-full object-cover '
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                />
            </div>
            <div className='flex flex-col justify-center py-10 sm:pt-5 md:pt-10 sm:w-1/2 sm:pl-10 '>
                <h1 className='text-lg md:text-2xl font-semibold'>{data[0].title} </h1>
                
                <div className="sm:text-sm  md:text-base py-8 sm:py-4 md:py-8" dangerouslySetInnerHTML={{ __html:data[0].desc.substring(0,250)+ '........'}} />
                <Link href={`/blog/${data[0].slug}`} className=" bg-lime-500 hover:bg-lime-800 p-2 rounded-md text-white w-24 text-center">Read More</Link>
            </div>
        </div>
    ) 
}