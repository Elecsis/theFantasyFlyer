import React from "react";

export default function Login() {
    return (
        <main className="flex w-full h-full bg-lime-500 border border-white border-t-2 border-b-2  text-black justify-center p-20">
                <div className="flex h-96 w-72 rounded-lg bg-white text-center  flex-col justify-evenly ">
                    <h1 className="">Login</h1>
                    <button className="bg-red-500 hover:bg-red-600 text-white self-center  py-2 px-4 rounded w-4/5">Sign in with Google</button>
                    <button className="bg-black hover:bg-stone-600 text-white self-center  py-2 px-4 rounded w-4/5">Sign in with GitHub</button>
                    <button className="bg-lime-500 hover:bg-lime-600 text-white self-center  py-2 px-4 rounded w-4/5">Sign in with Email</button>
                </div>
            
        </main>
    )
}