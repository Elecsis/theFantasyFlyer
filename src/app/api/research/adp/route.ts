import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async ( ) => {
        try {
            const player = await prisma.playerPPRADP.findFirst({
            })
            return new NextResponse(JSON.stringify(player, {status: 200} as any))
        } catch (err) {
            console.log(err)
            return new NextResponse(JSON.stringify({message: 'Something went wrong getting player information'}, {status: 500}as any))
        }
} 