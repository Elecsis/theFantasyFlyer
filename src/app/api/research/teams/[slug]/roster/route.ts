import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async (req: any, params: any) => {
    const slug = params
    const team = slug.params.slug

    try {
        const [playerBasic, teamBasic] = await prisma.$transaction([ 
            prisma.playerBasic.findMany({
                orderBy:  {Position: "desc"},
                where:{ 
                    Team: team ,
                    Active: true,
                    PositionCategory: 'OFF',
                    NOT: [{
                        Position: {
                          endsWith: 'OT', 
                        },
                      },
                      {
                        Position: {
                          endsWith: 'G', 
                        },
                      },
                      {
                        Position: {
                          endsWith: 'C', 
                        },
                      },
                    ],
                }}),
                
            prisma.teamBasic.findFirst({
                where:{Key: team}
        })
        ])
        return new NextResponse(JSON.stringify([playerBasic, teamBasic], {status: 200} as any))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: 'Something went wrong'}, {status: 500}as any))
    }
} 