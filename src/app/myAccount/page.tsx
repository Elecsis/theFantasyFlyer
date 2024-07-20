import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { SignOut } from "../componets/signoutButton";


export default async function MyAccount() {
    const session = await getServerSession(authOptions);
   console.log(session) 
   
    if(!session) {
        return redirect('/login')
    } else

    return (
        <main className="flex w-full h-full bg-lime-500 border border-white border-t-2 border-b-2  text-black justify-center p-20">
       
            <div className="flex h-52 w-72 rounded-lg bg-white text-center  items-center flex-col justify-evenly ">
                <h1 className="pb-[8%] text-2xl">My Account</h1>
                <SignOut/>
            </div> 
        </main>
    )
}