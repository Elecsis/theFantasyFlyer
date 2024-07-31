import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/db"
import { NextResponse } from "next/server"



export const POST = async (req:any) => {

    //const session = await getAuthSession()
    //console.log(req)
    // if(!session){
    //     return new NextResponse(
    //         JSON.stringify({message: 'Not Authenticated'}, {status: 401}as any)
    //     )
    // }
    
    // try{
    //     const body = await req.json()
    //     const post = await prisma.post.create({data: {...body, userEmail: session?.user?.email}})
    //     return new NextResponse(JSON.stringify(post, {status: 200}as any))
    // } catch (err) {
    //     console.log(err)
    //     return new NextResponse(JSON.stringify({message: 'Something went wrong'}, {status: 500}as any))
    // }
}