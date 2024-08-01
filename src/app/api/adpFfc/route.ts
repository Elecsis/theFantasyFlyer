import prisma from "@/utils/db"
import { NextResponse } from "next/server"



export const POST = async (req:any) => {

    console.log('doing delete')
   
    
    try{
        
        const deleted = await prisma.playerPPRADP.deleteMany()
        return new NextResponse(JSON.stringify(deleted, {status: 200}as any))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: 'Something went wrong'}, {status: 500}as any))
    }
}