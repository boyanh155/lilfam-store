import { NextRequest, NextResponse } from "next/server";
import schema from "../schema"
import { prisma } from "@/prisma/client";

type Params = {
    params: {
        id: string
    }
}
export async function GET(request: NextRequest, { params: { id } }: Params) {
    console.log(id)
    const user = await prisma.user.findUnique({
        where: {
            id: Number.parseInt(id)
        }
    })
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })
    return NextResponse.json({
        user
    })
}

export async function PUT(request: NextRequest, { params: { id } }: Params) {
    const body = await request.json()
    // validate
    const validation = schema.safeParse(body)
    if (!validation.success) {
        return NextResponse.json({
            error: validation.error.errors,
        }, { status: 400 })
    }
    const user = await prisma.user.findUnique({
        where: {
            id: Number.parseInt(id)
        }
    })
    if (!user) {
        return NextResponse.json({
            error: 'User not found'
        }, { status: 404 })
    }
    const updated = await prisma.user.update({
        where: {
            id: Number.parseInt(id)
        },
        data: {
            ...user,
            ...body
        },

    })
    return NextResponse.json({
        message: `User ${id}: has been updated`,
        updatedBody: updated
    })
}

export async function DELETE(request: NextRequest, { params: { id } }: Params) {
    const user = await prisma.user.findUnique({
        where: {
            id: Number.parseInt(id)
        }
    })
    if (!user) {
        return NextResponse.json({
            error: `User not found`,
        }, { status: 404 })
    }
    const updated = await prisma.user.delete({
        where: { id: Number.parseInt(id) }
    })
    return NextResponse.json({
        message: `User ${id} cooked`,
        updatedUser: updated
    })
}