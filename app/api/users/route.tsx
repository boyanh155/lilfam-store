import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client"


export const GET = async function (request: NextRequest) {
    const users = await prisma.user.findMany()
    return NextResponse.json({
        list: users,
        total: users.length
    }, { status: 200 })
}

export const POST = async function (request: NextRequest) {
    try {

        const body = await request.json()
        const validation = schema.safeParse(body)
        if (!validation.success) {
            return NextResponse.json({
                error: validation.error.errors
            }, { status: 400 })
        }
        const isExisted = await prisma.user.findUnique({
            where: {
                email: body.email
            }
        })
        if (isExisted) return NextResponse.json({ message: 'Email existed' }, { status: 400 })
        const newUser = await prisma.user.create({
            data: {
                ...body
            }
        })
        if (!newUser) {
            return NextResponse.json({
                message: 'Try again'
            })
        }
        return NextResponse.json({
            message: 'Create successfully',
            user: newUser
        }, { status: 201 })
    } catch (err) {
        return NextResponse.json({
            message: err
        }, { status: 500 })
    }

}
