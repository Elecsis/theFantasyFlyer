import Link from "next/link";

export default  function EditorsPosts () {
    return (
        <div className='w-full  text-left flex flex-col pt-10 md:pt-6  lg:pt-16'>
                        <h1 className='font-semibold text-2xl pb-6  md:pb-6 '>Editors Picks</h1>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-col justify-between w-full '>
                                <div className='bg-rose-500 hover:text-black text-xs w-[30%] rounded-full  text-center :'>Mock</div>
                                <Link href={"/blog"} className="hover:underline    md:text-left  ">
                                <h1 className='py-2 text-lg md:text-base hover:text-lime-500 hover:underline-offset-4'>kjdlgkj kljdnv jko ojdhf oijhksdfldskjf jhdg jhg k fdsgfjhdsg jhsdgdf oijdf </h1>
                                </Link>
                                <h3 className='text-stone-400 text-xs '>Date and time</h3>
                            </div>

                            <div className='flex flex-col justify-between w-full '>
                                <div className='bg-rose-500 hover:text-black text-xs w-[30%] rounded-full  text-center :'>Mock</div>
                                <Link href={"/blog"} className="hover:underline    md:text-left  ">
                                <h1 className='py-2 text-lg md:text-base hover:text-lime-500 hover:underline-offset-4'>kjdlgkj kljdnv jko ojdhf oijhksdfldskjf jhdg jhg k fdsgfjhdsg jhsdgdf oijdf </h1>
                                </Link>
                                <h3 className='text-stone-400 text-xs '>Date and time</h3>
                            </div>

                            <div className='flex flex-col justify-between w-full '>
                                <div className='bg-rose-500 hover:text-black text-xs w-[30%] rounded-full  text-center :'>Mock</div>
                                <Link href={"/blog"} className="hover:underline    md:text-left  ">
                                <h1 className='py-2 text-lg md:text-base hover:text-lime-500 hover:underline-offset-4'>kjdlgkj kljdnv jko ojdhf oijhksdfldskjf jhdg jhg k fdsgfjhdsg jhsdgdf oijdf </h1>
                                </Link>
                                <h3 className='text-stone-400 text-xs '>Date and time</h3>
                            </div>
                        </div>
                    </div> 
    )
}