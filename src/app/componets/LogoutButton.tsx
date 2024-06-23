'use client'

import { signOut } from "next-auth/react"

export default  function LogoutButton () {
    return (
        <button onClick={() => signOut({callbackUrl: `${window.location.origin}/login`}) } className="text-xs bg-lime-500 hover:bg-lime-500 p-2 rounded text-white">Log Out</button> 
    )
}