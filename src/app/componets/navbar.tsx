'use client'
import Link from "next/link"
import MobileHamburgerMenuSvg from "../../../public/svgs/mobile_hamburger_menu"
import { useState } from "react"

export default function Navbar() {
    const [ isMoiblieMenuExpanded, setIsMobileMenuExpanded] = useState(false)

    return (
        <>
            <nav className="flex flex-row w-min-screen bg-white text-black items-center justify-between px-4 lg:px-10 py-3 relative   z-50">
                <Link href={"/"} className="lg:pl-3  font-medium flex flex-row" onClick={() =>{ setIsMobileMenuExpanded(false)}}>
                    <h1 className="flex text-3xl lg:hidden text-lime-500" >The Fantasy Flyer</h1>
                    <h1 className="hidden lg:flex text-5xl text-lime-500">The Fantasy Flyer</h1>
                </Link>
                <div className="md:hidden flex flex-row items-center gap-4 ">
                    <Link href={"/book_appointment"} className="text-xs bg-lime-500 hover:bg-lime-500 p-2 rounded text-white">Log-in/Sign-up</Link> 
                    <div onClick={() =>{ setIsMobileMenuExpanded(!isMoiblieMenuExpanded)}}>
                        <MobileHamburgerMenuSvg/>
                    </div>
                    {isMoiblieMenuExpanded &&
                        <>
                            <div className={`absolute top-[60px] right-0  w-auto  h-auto flex flex-col bg-white p-5 gap-3 text-2xl rounded-b-lg transform transition-transform duration-2000 ease-in-out ${isMoiblieMenuExpanded ? 'translate-x-0' : 'translate-x-full'}`} onClick={() =>{ setIsMobileMenuExpanded(!isMoiblieMenuExpanded)}}>
                                <Link href={"/"} className="hover:underline">Home</Link>
                                <Link href={"/about"} className="hover:underline">News & Blog</Link>
                                <Link href={"/services"} className="hover:underline">Rankings</Link>
                                <Link href={"/contact_us"} className="hover:underline">Fantasy:101</Link>
                            </div>
                        </>
                    }
                </div>
                <div className="hidden md:flex flex-row items-center justify-end text-xl gap-6 p-2 pr-3">
                    <Link href={"/about"} className="hover:underline">News & Blog</Link>
                    <Link href={"/services"} className="hover:underline">Rankings</Link>
                    <Link href={"/contact_us"} className="f">Fantasy:101</Link>
                    <Link href={"/book_appointment"} className=" bg-lime-500 hover:bg-lime-800 p-2 rounded-md text-white">Log-in/Sign-up</Link>
                </div>
            </nav>
        </>
    )
}