import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async (req:any, {params}: any) => {
    const {slug} = params;
 
    try{
        const post = await prisma.post.findUnique({
            where: {slug},
            include: {user: true}
        })
        return new NextResponse(JSON.stringify({post}, {status: 200}as any))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: 'Something went wrong'}, {status: 500}as any))
    }
} 