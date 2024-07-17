import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async ( req:any, {params}: any) => {
    
    const {slug} = params;
    try {
        const team = await prisma.team.findFirst({
            where:{Key: slug}
                
            
        })
        const teamBasic = await prisma.teamBasic.findFirst({
            where:{Key: slug}
                
            
        })
        return new NextResponse(JSON.stringify(team, {status: 200} as any))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: 'Something went wrong'}, {status: 500}as any))
    }
} 