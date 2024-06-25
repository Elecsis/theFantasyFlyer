import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react"
import Link from "next/link";

export default async  function LogInOutButton () {

    const session = await getServerSession(authOptions);
   
    if(session?.user?.email) {
        return(
        <button onClick={() => signOut({callbackUrl: `${window.location.origin}/login`}) } className="text-xs bg-lime-500 hover:bg-lime-500 p-2 rounded text-white">Log Out</button> 
        )
    } else

    return (
        <Link href={"/login"} className="text-xs bg-lime-500 hover:bg-lime-500 p-2 rounded text-white">Log-in</Link>
    )
}