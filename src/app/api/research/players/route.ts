import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async (req:any) => {

  const {searchParams} = new URL(req.url);
  const page = Number(searchParams.get("page"));
  const search = String(searchParams.get("search"));
  const PLAYERS_PER_PAGE = 30;


    try {
        const [playerBasic, count] = await prisma.$transaction([
          prisma.playerBasic.findMany({
            orderBy:  {PlayerID: "asc"},
            take:PLAYERS_PER_PAGE,
            skip: PLAYERS_PER_PAGE * (page -1),
            where:{ 
                Active: true,
                Name:{
                  contains: search
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
        prisma.playerBasic.count({ where: {
          Active: true,
          Name:{
            contains: search
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
        }}),

      ])
        return new NextResponse(JSON.stringify([playerBasic, count], {status: 200} as any))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: 'Something went wrong'}, {status: 500}as any))
    }
} 