export const revalidate = 60 * 60 * 24; // 24 hours

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { Gender } from "@prisma/client";
import { notFound, redirect } from "next/navigation";

interface CategoryPageProps {
  params: {
    gender: string;
  };
  searchParams: {
    page?: string;
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { gender } = params;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, totalPages } = await getPaginatedProductsWithImages({
    page,
    gender: gender as Gender,
  });

  if (products.length === 0) {
    redirect(`/gender/${gender}`);
  }

  const labels: Record<string, string> = {
    men: "para Hombres",
    women: "para Mujeres",
    kid: "para Niños",
    unisex: "para Todos",
  };

  if (!products.length) {
    notFound();
  }

  return (
    <>
      <Title
        title={`Tienda ${labels[gender]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </>
  );
}
