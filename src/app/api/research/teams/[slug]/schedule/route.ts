import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async (req: any, params: any) => {
    const slug = params
    const team = slug.params.slug

    try {
        const [matchUpBasic, teamBasic] = await prisma.$transaction([ 
            prisma.matchUpBasic.findMany({
              orderBy:  {Week: "asc"},
              where:{ 
                  OR: [
                    {
                      AwayTeam: {
                        equals: team,
                      },
                    },
                    { HomeTeam:  { 
                      equals: team, 
                      },
                    },
                  ],  
                }
              }
            ),   
            prisma.teamBasic.findFirst({
                where:{Key: team}
            })
        ])
        return new NextResponse(JSON.stringify([matchUpBasic, teamBasic], {status: 200} as any))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: 'Something went wrong'}, {status: 500}as any))
    }
} 