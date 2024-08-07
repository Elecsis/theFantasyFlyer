'use client'
import Link from "next/link"
import MobileHamburgerMenuSvg from "../../../public/svgs/mobile_hamburger_menu"
import { useState } from "react"
import LogInOutButton from "./LogInOutButton"
import LogInMyAccount from "./LogInMyAccount"

export default  function Navbar() {
    const [ isMoiblieMenuExpanded, setIsMobileMenuExpanded] = useState(false)
   
    return (
        <>
            <nav className="flex flex-row w-min-screen bg-white text-black items-center justify-between px-4 lg:px-10 py-3 relative   z-50">
                <Link href={"/"} className="lg:pl-3  font-medium flex flex-row" onClick={() =>{ setIsMobileMenuExpanded(false)}}>
                    <h1 className="flex text-xl sm:text-2xl md:text-base lg:hidden text-lime-500 drop-shadow-lg" >The Fantasy Flyer</h1>
                    <h1 className="hidden lg:flex text-3xl text-lime-500 drop-shadow-lg">The Fantasy Flyer</h1>
                </Link>
                <div className="md:hidden flex flex-row items-center gap-4 ">
                <LogInOutButton/>
                    <div onClick={() =>{ setIsMobileMenuExpanded(!isMoiblieMenuExpanded)}}>
                        <MobileHamburgerMenuSvg/>
                    </div>
                    {isMoiblieMenuExpanded &&
                        <>
                            <div className={`absolute top-14 right-0  w-auto  border-l-4 border-b-4 border-lime-500 h-auto flex flex-col bg-white p-5 gap-3 text-2xl rounded-b-lg transform transition-transform duration-2000 ease-in-out ${isMoiblieMenuExpanded ? 'translate-x-0' : 'translate-x-full'}`} onClick={() =>{ setIsMobileMenuExpanded(!isMoiblieMenuExpanded)}}>
                                <Link href={"/"} className="hover:underline">Home</Link>
                                <Link href={"/news"} className="hover:underline">News & Blog</Link>
                                <Link href={"/rankings"} className="hover:underline">Rankings</Link>
                                <Link href={"/research/teams"} className="hover:underline">Research</Link>
                                <Link href={"/show"} className="hover:underline">The Show</Link>
                                <Link href={"/fantasy"} className="hover:underline">Fantasy🏈:101</Link>
                                <LogInMyAccount/>
                            </div>
                        </>
                    }
                </div>
                <div className="hidden md:flex  md:text-base lg:text-xl flex-row items-center justify-end text-xl gap-6 p-2 pr-3">
                    <Link href={"/news"} className="hover:underline">News & Blog</Link>
                    <Link href={"/rankings"} className="hover:underline">Rankings</Link>
                    <Link href={"/research/teams"} className="hover:underline">Research</Link>
                    <Link href={"/show"} className="hover:underline">The Show</Link>
                    <Link href={"/fantasy"} className="hover:underline">Fantasy🏈:101</Link>
                    <LogInOutButton/>
                </div>
            </nav>
        </>
    )
}


