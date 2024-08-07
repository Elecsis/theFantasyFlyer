import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async (req:any, {params}: any) => {
    const {slug} = params;
 
    try{
        const post = await prisma.post.update({
            where: {slug},
            data: { views: {increment: 1}},
            include: {user: true}
        })
        return new NextResponse(JSON.stringify({post}, {status: 200}as any))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: 'Something went wrong Lex'}, {status: 500}as any))
    }
} 