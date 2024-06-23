"use client"
import { signIn } from "next-auth/react";
import { useState } from "react"

export default function SignInForm() {
    const [email, setEmail] = useState<string| null>(null);

    async function SignInWithEmail() {
        const signInResult = await signIn('email',{
            email: email,
            callbackUrl:  `${window.location.origin}`,
            redirect: false,
        })

        // if(!signInResult?.ok) {
        //     return d
        // }
    }    

   

    return(
        <form action={SignInWithEmail}>
            <div className="flex flex-col gap-4 ">
                <label  className="text-left w-4/5 self-center">Email</label>
                <input onChange={(e) => {setEmail(e.target.value )}} type="email" name="email" placeholder="example@abc.com" className=" border w-4/5 self-center h-10 rounded pl-4" />
                <button type="submit" className="bg-lime-500 hover:bg-lime-600 text-white self-center  py-2 px-4 rounded w-4/5">Login with Email</button>
            </div>
        </form>
    )
}