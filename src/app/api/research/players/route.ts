import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async () => {

    try {
        const playerBasic = await prisma.playerBasic.findMany({
            orderBy:  {PlayerID: "asc"},
            take:40,
            where:{ 
                Active: true,
                
                OR: [
                  {
                    PositionCategory: {
                      equals: 'OFF',
                    },
                  },
                  { Position:  { 
                    equals: 'K' 
                    },
                  },
                ],

                
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
               
            }
          }
        )
        return new NextResponse(JSON.stringify(playerBasic, {status: 200} as any))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: 'Something went wrong'}, {status: 500}as any))
    }
} 