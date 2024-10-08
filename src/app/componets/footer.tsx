'use client'
import Link from "next/link";
import { useState } from "react";
import FooterMinusSvg from "../../../public/svgs/footer_link_minus";
import FooterPlusSvg from "../../../public/svgs/footer_link_plus";
import LogInOutButton from "./LogInOutButton";
import LogInOutFooter from "./LogInOutFooter";



export default function Footer() {
    const [ isLinksExpanded, setIsLinksExpanded] = useState(false)
    const [ isSocialExpanded, setIsSocialExpanded] = useState(false)
    return (  
        <div className=" absolute  w-screen  bg-white text-black flex-col pt-10 lg:pt-0 lg:px-24 xl:px-48 2xl:px-72 ">
        <form action="">
            <div className='lg:hidden '>
                <div className=" w-full bg-white  text-black">
                    <h1 className="text-center bg-white text-4xl  md:text-5xl text-lime-500 pb-7 px-16 leading-[43px] ">The Fantasy Flyer</h1>
                    
                </div>
                <div className="bg-white text-black flex flex-col items-center px-8">
                    <h1 className="text-6xl"></h1>
                    <h4 className="w-full text-xl text-center font-light ">We Fly High and Hunt Championships</h4>
                </div>
                <div className="flex flex-col text-black px-9 bg-white">
                    <div className="flex flex-row  border-b justify-between  pt-8 items-center pb-1" onClick={() => { setIsLinksExpanded(!isLinksExpanded)}}>
                        <p className="antialiased text-lg">USEFUL LINKS</p>
                        {!isLinksExpanded &&
                            <FooterPlusSvg/>
                        }
                        {isLinksExpanded &&
                            <FooterMinusSvg/>
                        }
                    </div>
                    {isLinksExpanded &&
                        <div className="flex flex-col gap-2 py-2" onClick={() => { setIsLinksExpanded(false)}}>
                            <Link href="/news" className="hover:underline " >News & Blog</Link>
                            <Link href="/rankings" className="hover:underline">Rankings</Link>
                            <Link href="/research" className="hover:underline">Research</Link>
                            <Link href="/show" className="hover:underline">The Show</Link>
                            <Link href="/fantasy" className="hover:underline">Fantasy Footbal:101</Link>
                            <LogInOutFooter/>
                        </div>
                    }
                    <div className="flex flex-row  border-b justify-between  pt-8 items-center pb-1" onClick={() => { setIsSocialExpanded(!isSocialExpanded)}}>
                        <p className="antialiased text-lg">LET&apos;S GET SOCIAL</p>
                        {!isLinksExpanded &&
                            <FooterPlusSvg/>
                        }
                        {isLinksExpanded &&
                            <FooterMinusSvg/>
                        }
                    </div>
                    {isSocialExpanded &&
                        <div className="flex flex-col antialiased bg-white py-2 gap-2">
                            <Link href={'https://www.youtube.com/channel/UCKRn6jHOQ-ibRDoeUZsH3EA'} className=" hover:underline">YOUTUBE</Link>
                            <Link href={'https://www.instagram.com/thefantasyflyer/'} className=" hover:underline">INSTAGRAM</Link>
                            <Link href={'https://x.com/thefantasyflyer'} className=" hover:underline">TWITTER</Link>
                            <Link href={'https://podcasters.spotify.com/pod/show/thefantasyflyer'} className=" hover:underline">PODCAST</Link>
                        </div>
                    }
                </div>
                
                <div className="px-9  pb-12 flex flex-row text-sm font-light pt-6  bg-white">
                    <p className='pr-2'>© 2023 The Fantasy Flyer, LLC  </p>
                    <p className='pr-2'>|</p>
                    <p className='pr-2'><Link href={'/terms'} className="">TERMS</Link></p>
                    <p className='pr-2'>|</p>
                    <p className=''> <Link href={'/policy'} className="">POLICY</Link></p>
                </div>
            </div>
            {/* desktop */}
            <div className="hidden lg:flex w-full flex-col bg-white">
                <div className='flex flex-col justify-center items-center pt-16 pb-4'>
                    <Link href={'/'} className='text-6xl  pt-4 pb-2 text-lime-500'>

                    <h1 >The Fantasy Flyer</h1>
                    </Link>
                    <h4 className='text-xl font-extralight tracking-[.6em] pt-4 pb-2'>We Fly High and Hunt Championships</h4>
                </div>
                <div className="flex flex-row justify-between ">
                    <div className='flex flex-row pt-3 justify-evenly text-sm w-full '>
                        
                        <div className='flex flex-col font-light gap-2 justify-center'>
                            <Link href="/news" className="hover:underline">News & Blog</Link>
                            <Link href="/rankings" className="hover:underline">Rankings</Link>
                            <Link href="/research" className="hover:underline">Research</Link>
                            <Link href="/show" className="hover:underline">The Show</Link>
                            <Link href="/fantasy" className="hover:underline">Fantasy Football:101</Link>
                            <LogInOutFooter/>
                        </div>
                        <div className='flex flex-col font-light gap-2 '>
                            <Link href={'https://www.youtube.com/channel/UCKRn6jHOQ-ibRDoeUZsH3EA'} className="hover:underline">YOUTUBE</Link> 
                            <Link href={'https://www.instagram.com/thefantasyflyer/'} className="hover:underline">INSTAGRAM</Link>  
                            <Link href={'https://x.com/thefantasyflyer'} className="hover:underline">TWITTER</Link> 
                            <Link href={'https://podcasters.spotify.com/pod/show/thefantasyflyer'} className="hover:underline">PODCAST</Link> 
                        </div>
                    </div>
                    
                </div> 
                <p className='text-xs font-light pt-10  pb-20'>© 2023 The Fanatasy Flyer, LLC     |     <Link href={'/terms'} className="">TERMS</Link>      |   <Link href={'/policy'} className="">POLICY</Link></p>
            </div>
        </form>    
       </div>
    );
}