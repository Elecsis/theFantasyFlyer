
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SignInWithGoogle from "../componets/GoogleSignInButton";


export default async function Login() {
    const session = await getServerSession(authOptions);
    
   
    if(session) {
        return redirect('/')
    } else

    return (
        <main className="flex w-full h-full bg-lime-500 border border-white border-t-2 border-b-2  text-black justify-center p-20">
       
            <div className="flex h-52 w-72 rounded-lg bg-white text-center  flex-col justify-evenly ">
                <h1 className="pb-[8%] text-2xl">Login</h1>
                {/* <SignInForm/>
                <div className="relative flex  items-center px-[10%]">
                    <div className="flex-grow border-t border-gray-800"></div>
                    <span className="flex-shrink mx-4 text-black">or</span>
                    <div className="flex-grow border-t border-gray-800"></div>
                </div> */}
                <SignInWithGoogle/>
            </div> 
        </main>
    )
}


