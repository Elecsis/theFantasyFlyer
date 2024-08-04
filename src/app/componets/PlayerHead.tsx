import Image from "next/image";
import Link from "next/link";






export default async function PlayerHead( { data }: any ) {

    return (
        <div className=' flex flex-col-reverse sm:flex-row lg:pt-16 w-full px-10'>
            <div className='flex flex-col justify-between pt-10 sm:w-1/2 md:pr-10 pb-5'>
                <div className="flex flex-row justify-between pr-5">
                    <h1 className=' text-xl font-semibold'>{data.City} </h1>
                    <Link href={"/research"} className="bg-lime-500 text-white rounded-full p-1 lg:p-3 hover:border hover:border-lime-500 hover:text-lime-500 hover:bg-white ">Back to Teams </Link>
                    <Link href={"/research/players"} className="bg-lime-500 text-white rounded-full p-1 lg:p-3 hover:border hover:border-lime-500 hover:text-lime-500 hover:bg-white ">Back to Players </Link>
                    <Link href={"/research/adp"} className="bg-lime-500 text-white rounded-full p-1 lg:p-3 hover:border hover:border-lime-500 hover:text-lime-500 hover:bg-white ">Back to ADP </Link>
                </div>
                
                <h1 className=' text-3xl font-semibold'>{data.Name} </h1>

                <div className="flex flex-row gap-3 ">
                    
                    <div className="text-stone-600">
                        <h2 className=""></h2>
                        <h3 className="text-xs"></h3>
                    </div>
                </div>
            </div>
            {data?.WikipediaLogoURL && (<div className='w-full h-96 sm:w-1/2   relative bg-lime-500 rounded-lg'>
                <Image
                    src={data.WikipediaLogoURL}
                    alt='Football field and stadium at the 50 yard line'
                    fill
                    className='w-full h-full  rounded-lg'
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority= {true }
                />
            </div>)}
        </div>
    )
}












