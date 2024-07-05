import { authOptions } from "@/utils/auth";
import { signOut } from "next-auth/react";
 
export function SignOut() {
    return <div onClick={() => signOut()}>Signout</div>
  }