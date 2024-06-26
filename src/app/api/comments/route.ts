import { authOptions, getAuthSession } from "@/utils/auth"
import prisma from "@/utils/db"
import { getServerSession } from "next-auth"
import { getSession } from "next-auth/react"
import { NextResponse } from "next/server"

export const GET = async (req:any,) => {
    const {searchParams} = new URL(req.url)
    const postSlug = searchParams.get('postSlug')
 
    try{
        const comments = await prisma.comment.findMany({
            where: {
                ...(postSlug && {postSlug})
            },
            include: {user: true}
        })
        return new NextResponse(JSON.stringify(comments, {status: 200}as any))
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
    console.log(session.user )
    try{
        const body = await req.json()
        const comment = await prisma.comment.create({data: {...body, userEmail: session?.user?.email}})
        return new NextResponse(JSON.stringify(comment, {status: 200}as any))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: 'Something went wrong'}, {status: 500}as any))
    }
} 