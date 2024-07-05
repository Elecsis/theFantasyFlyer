
import {  useSession } from "next-auth/react"
import Link from "next/link";

export default  function LogInOutButton () {

    const {status} = useSession();   
   
    return <>
        { status === "unauthenticated" ? (
            <Link href={"/login"} className="w-20 text-xs bg-lime-500 hover:bg-lime-500 p-2 text-center rounded text-white lg:text-lg">Log-in</Link>
        ) : ( 
            <>
                <Link href={"/myAccount"} className="w-20 text-xs bg-lime-500 hover:bg-lime-500 p-2 text-center rounded text-white lg:text-lg">Account</Link>
            </>
        )}
    </>
    
}
