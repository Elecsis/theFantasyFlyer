import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async ( req:any, {params}: any) => {

    const playerID = parseInt(params.slug)
    const playerName = params.slug
    
   if(!playerID){

        try {
            const player = await prisma.playerBasic.findFirst({
                where:{Name: playerName}
            })
            return new NextResponse(JSON.stringify(player, {status: 200} as any))
        } catch (err) {
            console.log(err)
            return new NextResponse(JSON.stringify({message: 'Something went wrong getting player information'}, {status: 500}as any))
        }
   } else {

    try {
        const player = await prisma.playerBasic.findFirst({
            where:{PlayerID: playerID}
        })
        return new NextResponse(JSON.stringify(player, {status: 200} as any))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: 'Something went wrong getting player information'}, {status: 500}as any))
    }

   }

    
} 