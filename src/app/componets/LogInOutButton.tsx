
import { signOut, useSession } from "next-auth/react"
import Link from "next/link";

export default  function LogInOutButton () {

    const {status} = useSession();   
   
    return <>
        { status === "unauthenticated" ? (
            <Link href={"/login"} className="w-20 text-xs bg-lime-500 hover:bg-lime-500 p-2 text-center rounded text-white lg:text-lg">Log-in</Link>
        ) : ( 
            <></>
        )}
    </>
    
}


//<div onClick={() => signOut({callbackUrl: `${window.location.origin}/login`}) } className="w-20 text-xs bg-lime-500 hover:bg-lime-500 p-2 text-center rounded text-white lg:text-lg">Log Out</div>