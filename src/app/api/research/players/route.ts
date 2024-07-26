import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async (req:any) => {

  const {searchParams} = new URL(req.url);
  const search = String(searchParams.get("search"));
  const POST_PER_PAGE = 5;


    try {
        const [playerBasic, count] = await prisma.$transaction([
          prisma.playerBasic.findMany({
            orderBy:  {PlayerID: "asc"},
            take:40,
            where:{ 
                Active: true,
                Name:{
                  startsWith: search
              },
              
               
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
        ),
        prisma.playerBasic.count(),

      ])
        return new NextResponse(JSON.stringify([playerBasic, count], {status: 200} as any))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: 'Something went wrong'}, {status: 500}as any))
    }
} 