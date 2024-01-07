"use server";

import prisma from "@/lib/prisma";

interface PaginationOptions {
  page?: number;
  take?: number;
}

export const getPaginatedProductsWithImages = async ({
  page = 1,
  take = 12,
}: PaginationOptions) => {
  if (isNaN(Number(page)) || isNaN(Number(take))) {
    page = 1;
    take = 12;
  }
  if (page < 1) {
    page = 1;
  }

  try {
    const products = await prisma.product.findMany({
      take: take,
      skip: (page - 1) * take,
      include: {
        images: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
    });

    const totalCount = await prisma.product.count({});
    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages,
      products: products.map((product) => ({
        ...product,
        images: product.images.map((image) => image.url),
      })),
    };
  } catch (error) {
    throw new Error("Error getting paginated products with images");
  }
};
