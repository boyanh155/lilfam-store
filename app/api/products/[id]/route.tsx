import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";

type Params = {
    params: {
        id: string
    }
}

export async function GET(req: NextRequest, { params: { id } }: Params) {
    try {
        if (!id) return NextResponse.json({ message: 'Missing parameter' }, { status: 400 })
        const currentProduct = await prisma.product.findUnique({
            where: {
                id: Number.parseInt(id)
            }
        })
        if(!currentProduct) return NextResponse.json({
            error:`Product not found`
        },{
            status:404
        })
        return NextResponse.json({
            data: currentProduct
        })
    } catch (err) {
        return NextResponse.json({ message: 'Error get detail product', error: err }, { status: 500 })
    }
}