import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async () => {

    try {
        const adp= await prisma.playerPPRADP.findMany()
        return new NextResponse(JSON.stringify(adp, {status: 200} as any))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: 'Something went wrong ppr adp'}, {status: 500}as any))
    }
} 