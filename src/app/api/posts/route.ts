import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async (req:any) => {

    const {searchParams} = new URL(req.url);
    const page = Number(searchParams.get("page"));
    const cat = String(searchParams.get("cat"));
    const POST_PER_PAGE = 5;

    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        where: {
            ...(cat && { catSlug: cat} )
        }
    }

    try {
        const [posts,count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({where: query.where}),
        ])
        return new NextResponse(JSON.stringify({posts, count}, {status: 200}as any))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: 'Something went wrong'}, {status: 500}as any))
    }
} 