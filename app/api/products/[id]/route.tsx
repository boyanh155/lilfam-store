import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";
import { BadRequestError, NotFoundError } from "@/app/libs/CustomError";
import { responseError } from "@/app/libs/helpers";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(req: NextRequest, { params: { id } }: Params) {
  try {
    if (!id) throw new BadRequestError();
    const genericProduct = await prisma.generic_product.findFirst({
      where: {
        genericId: Number.parseInt(id),
      },
    });
    const specificProduct = await prisma.specific_product.findMany({
      where: {
        genericId: Number.parseInt(id),
      },
    });
    if (!genericProduct || !specificProduct.length) throw new NotFoundError();
    const _result = await Promise.all(
      specificProduct.map(async (v) => {
        const _sizes = await prisma.size.findMany({
          where: { specificId: v.specificId },
        });
        return {
          ...v,
          images: (v.images ? JSON.parse(v.images) : []) as Array<string>,
          sizes: _sizes,
        };
      })
    );
    const category = await prisma.category.findFirst({
      where: { id: genericProduct.categoryId },
    });

    return NextResponse.json<ProductResponseType>({
      category,
      genericProduct,
      specificList: _result,
    });
  } catch (err: any) {
    return responseError(err, err?.status);
  }
}
