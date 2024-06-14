import React from "react";
import Image from 'next/image'
import Link from 'next/link'

export default function Blog() {
    return (
        <main className="bg-white text-black">

            <div className=' flex flex-col sm:flex-row lg:pt-16 w-screen px-10'>
                <div className='flex flex-col justify-between pt-10 sm:w-1/2 md:pr-10 pb-5'>
                    <h1 className=' text-5xl font-semibold'>kjdlgkj kljdnv jko ojdhf oidf oijdf </h1>
                    
                    <div className="text-stone-600">
                        <h2 className="">Lex Pomales</h2>
                        <h3 className="text-xs">Date and time</h3>
                    </div>
                </div>
                <div className=' h-96 sm:w-1/2  aspect-square relative bg-lime-500 '>
                    <Image
                    src='/images/theFantasyFlyerLogo.png'
                    alt='Football field and stadium at the 50 yard line'
                    fill
                    className='w-full h-full object-cover '
                    />
                </div>
            </div>

            <div className='flex flex-col w-full lg:flex-row px-10'>
                <div className='lg:w-4/5 flex flex-col'>
                   
                    <div className='flex flex-col w-full lg:pr-20 pt-16'>
                        <p className=" text-lg ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ut porttitor leo a diam. Eu ultrices vitae auctor eu augue ut. A scelerisque purus semper eget duis at. Elementum sagittis vitae et leo duis. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Platea dictumst quisque sagittis purus. Id ornare arcu odio ut sem nulla. Id interdum velit laoreet id. Ipsum dolor sit amet consectetur adipiscing elit ut.

                            Volutpat commodo sed egestas egestas fringilla phasellus faucibus. In mollis nunc sed id semper. Egestas pretium aenean pharetra magna. Egestas integer eget aliquet nibh praesent tristique magna sit amet. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Sagittis vitae et leo duis ut diam quam nulla. Luctus accumsan tortor posuere ac ut consequat semper. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Cursus metus aliquam eleifend mi in nulla posuere. Elementum nisi quis eleifend quam adipiscing vitae proin. Auctor elit sed vulputate mi sit amet. Tortor posuere ac ut consequat semper viverra nam libero justo. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Sagittis id consectetur purus ut faucibus. Pharetra vel turpis nunc eget lorem dolor sed viverra. Maecenas sed enim ut sem viverra aliquet eget sit. Neque volutpat ac tincidunt vitae semper.

                            Adipiscing tristique risus nec feugiat in. Orci dapibus ultrices in iaculis nunc. Arcu non odio euismod lacinia. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Auctor augue mauris augue neque gravida in. Sed pulvinar proin gravida hendrerit. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Urna id volutpat lacus laoreet non curabitur gravida. Nunc vel risus commodo viverra maecenas accumsan lacus. Rutrum quisque non tellus orci ac auctor augue. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.
                        </p>  
                   
                        <div className="w-full  pt-16 pb-10 flex flex-col">
                            <h1 className="text-stone-600 text-3xl pb-10">Comments</h1>
                            <div className="flex flex-col md:flex-row h-36 ">
                                <input className="md:w-[85%]  h-full border"></input>
                                <div className="w-[50%] md:w-[15%] flex flex-col justify-center pt-10 md:pt-0 md:px-6">
                                    <Link href={"/"} className=" bg-lime-500 hover:bg-lime-800 p-2 rounded-md text-white h-10 text-center ">Send</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">

                             <div className="flex flex-col">
                                <div className="text-stone-600">
                                    <h2 className="">Lex Pomales</h2>
                                    <h3 className="text-xs">Date and time</h3>
                                </div>
                                <div className="text-left pt-2">lksajdhfladskjfhadslkjfhasdlkfjhasdlkfjh</div>
                             </div>

                             <div className="flex flex-col">
                                <div className="text-stone-600">
                                    <h2 className="">Lex Pomales</h2>
                                    <h3 className="text-xs">Date and time</h3>
                                </div>
                                <div className="text-left pt-2">lksajdhfladskjfhadslkjfhasdlkfjhasdlkfjh</div>
                             </div>

                             <div className="flex flex-col">
                                <div className="text-stone-600">
                                    <h2 className="">Lex Pomales</h2>
                                    <h3 className="text-xs">Date and time</h3>
                                </div>
                                <div className="text-left pt-2">lksajdhfladskjfhadslkjfhasdlkfjhasdlkfjh</div>
                             </div>

                             <div className="flex flex-col">
                                <div className="text-stone-600">
                                    <h2 className="">Lex Pomales</h2>
                                    <h3 className="text-xs">Date and time</h3>
                                </div>
                                <div className="text-left pt-2">lksajdhfladskjfhadslkjfhasdlkfjhasdlkfjh</div>
                             </div>

                        </div>
                    </div>
                </div>
                <div className='pt-10 md:pt-0 md:w-full lg:w-1/5 flex flex-col md:flex-row lg:flex-col md:px-10 lg:px-0'>

                    <div className='w-full  text-left flex flex-col md:pt-14 md: lg:w-full'>
                        <h3 className='text-xs text-stone-400'>What&apos;s hot</h3>
                        <h1 className='font-semibold text-2xl pb-6  md:pb-6 '>Most Popular</h1>
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

                    <div className='w-full'>
                        <div className=' text-left md:w-full flex flex-col pt-10 md:pt-14 '>
                            <h3 className='text-xs text-stone-400'>Discover by topic</h3>
                            <h1 className='font-semibold text-2xl pb-6  md:pb-4  '>Categories</h1>

                            <div className='grid  gap-4 w-full  grid-cols-2 md:grid-cols-4 lg:grid-cols-2'>
                                <Link href={"/news"} className="w-full bg-lime-500 hover:bg-lime-900 p-2 rounded-full text-white text-center">News</Link>
                                <Link href={"/news"} className="w-full bg-sky-500 hover:bg-sky-900 p-2 rounded-full text-white text-center">Blog</Link>
                                <Link href={"/news"} className="w-full bg-rose-500 hover:bg-rose-900 p-2 rounded-full text-white text-center">Mock</Link>
                                <Link href={"/news"} className="w-full bg-amber-500 hover:bg-amber-900 p-2 rounded-full text-white text-center">Fantasy</Link>
                                <Link href={"/news"} className="w-full bg-emerald-500 hover:bg-emerald-900 p-2 rounded-full text-white text-center">Conf</Link>
                                <Link href={"/news"} className="w-full bg-cyan-500 hover:bg-cyan-900 p-2 rounded-full text-white text-center">Division</Link>
                                <Link href={"/news"} className="w-full bg-fuchsia-500 hover:bg-fuchsia-900 p-2 rounded-full text-white text-center">Team</Link>
                                <Link href={"/news"} className="w-full bg-stone-500 hover:bg-stone-900 p-2 rounded-full text-white text-center">Player</Link>
                            </div>
                        </div> 

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
                    </div>
                    </div>

                
            </div>


        </main>
    )
}