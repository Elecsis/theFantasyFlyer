import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async () => {

    try {
        const posts = await prisma.post.findMany({where: {editor: true}})
        return new NextResponse(JSON.stringify(posts, {status: 200}as any))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: 'Something went wrong getting editors post'}, {status: 500}as any))
    }
} 

