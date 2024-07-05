import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async () => {

    try {
        const teamsBasic = await prisma.teamBasic.findMany()
        return new NextResponse(JSON.stringify(teamsBasic, {status: 200} as any))
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: 'Something went wrong'}, {status: 500}as any))
    }
} 