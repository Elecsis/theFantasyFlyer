import { signOut, useSession } from "next-auth/react"
import Link from "next/link";

export default  function LogInMyAccount () {

    const {status} = useSession();   
   
    return <>
        { status === "unauthenticated" ? (
            <Link href={"/login"} className="hover:underline">Log-in</Link>
        ) : (
            <Link href={"/myAccount"} className="hover:underline">MyAccount</Link> 
        )}
    </>
    
}