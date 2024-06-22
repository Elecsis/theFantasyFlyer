"use client"
import { signIn } from "next-auth/react"


export default function SignInWithGoogle() {
    return (
        <button onClick={()=> signIn('google', {callbackUrl: `${window.location.origin}`})} className="bg-red-500 hover:bg-red-600 text-white self-center  py-2 px-4 rounded w-4/5">Sign in with Google</button>
    )
}