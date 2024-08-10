import { getAuthSession } from "@/utils/auth"
import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async () => {

    try {
        const shows = await prisma.show.findMany({
            orderBy:{
                createdAt: 'desc'
            }
        })
        return new NextResponse(JSON.stringify(shows, {status: 200}as any))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: 'Something went wrong getting editors post'}, {status: 500}as any))
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
        const show = await prisma.show.create({data: {...body}})
        return new NextResponse(JSON.stringify(show, {status: 200}as any))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: 'Something went wrong youtube show'}, {status: 500}as any))
    }
} 