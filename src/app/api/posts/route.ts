import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async (req:any) => {

    const {searchParams} = new URL(req.url);
    const page = Number(searchParams.get("page"));
    const cat = String(searchParams.get("cat"));
    const POST_PER_PAGE = 5;

    

    try {
        const [posts,count] = await prisma.$transaction([
            prisma.post.findMany({
                orderBy:  {createdAt: "desc"},
                take: POST_PER_PAGE,
                skip: POST_PER_PAGE * (page - 1),
                where: {
                    ...(cat && { catSlug: cat} )
                },
            }),
            prisma.post.count({where: {
                ...(cat && { catSlug: cat} )
            }}),
        ])
        return new NextResponse(JSON.stringify({posts, count}, {status: 200}as any))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: 'Something went wrong'}, {status: 500}as any))
    }
} 

export const POST = async (req:any) => {

    const session = await getAuthSession()
    
    if(!session){
        return new NextResponse(
            JSON.stringify({message: 'Not Authenticated'}, {status: 401}as any)
        )
    }
    
    try{
        const body = await req.json()
        const post = await prisma.post.create({data: {...body, userEmail: session?.user?.email}})
        return new NextResponse(JSON.stringify(post, {status: 200}as any))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: 'Something went wrong'}, {status: 500}as any))
    }
} 