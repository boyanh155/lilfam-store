import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';
import schema from './scheme';

export async function GET(req: NextRequest) {
    const products = await prisma.product.findMany()
    if (!products) return NextResponse.json({ message: 'Products not found' }, { status: 404 })
    return NextResponse.json({
        list: products,
        total: products.length
    })
}

export async function POST(req: NextRequest) {
    try {

        const body = await req.json()
        const validation = schema.safeParse(body)
        if (!validation.success) return NextResponse.json({ message: 'Bad request' }, { status: 400 })

        const createdProduct = await prisma.product.create({
            data: body
        })
        return NextResponse.json({
            data: createdProduct
        })
    } catch (err) {
        return NextResponse.json({ error: err, message: 'Error create user' }, { status: 500 })
    }
}