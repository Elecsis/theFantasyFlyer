
import { signOut, useSession } from "next-auth/react"
import Link from "next/link";

export default  function LogInOutButton () {

    const {status} = useSession();   
   
    return <>
        { status === "unauthenticated" ? (
            <Link href={"/login"} className="text-xs bg-lime-500 hover:bg-lime-500 p-2 rounded text-white">Log-in</Link>
        ) : (
            <button onClick={() => signOut({callbackUrl: `${window.location.origin}/login`}) } className="text-xs bg-lime-500 hover:bg-lime-500 p-2 rounded text-white">Log Out</button> 
        )}
    </>
    
}



