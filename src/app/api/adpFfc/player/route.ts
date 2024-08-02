import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async ( ) => {
        try {
            const [standard, ppr, twoqb , dynasty ] = await prisma.$transaction([
                prisma.playerNonPPRADP.findFirst({}),
                prisma.playerPPRADP.findFirst({}),
                prisma.player2QbADP.findFirst({}),
                prisma.playerDynastyADP.findFirst({})
            ])
            return new NextResponse(JSON.stringify([ppr, standard, twoqb, dynasty ], {status: 200} as any))
        } catch (err) {
            console.log(err)
            return new NextResponse(JSON.stringify({message: 'Something went wrong getting player information'}, {status: 500}as any))
        }
} 

