'use client'
import { signOut } from "next-auth/react";
 
export function SignOut() {
    return <div className="w-20 text-xs bg-lime-500 hover:bg-lime-500 p-2 text-center rounded text-white lg:text-lg" onClick={() => signOut()}>Signout</div>
  }