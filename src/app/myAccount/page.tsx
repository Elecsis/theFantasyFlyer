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
       
            <div className="flex h-auto w-auto rounded-lg bg-white text-center  items-center flex-col justify-evenly p-5">
                <h1 className="pb-[8%] text-2xl underline underline-offset-8">My Account</h1>
                <div className="flex flex-row w-full px-10 justify-between">
                    <h1 className="font-semibold">Username:</h1>
                    <h1 className="pb-[8%] text-sm">{session.user?.name}</h1>
                </div>
                <div className="flex flex-row w-full px-10 justify-between pb-5">
                    <h1 className="font-semibold pr-10">Email:</h1>
                    <h1 className="pb-[8%] text-sm">{session.user?.email}</h1>
                </div>
                <SignOut/>
            </div> 
        </main>
    )
}