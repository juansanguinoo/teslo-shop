export const revalidate = 60 * 60 * 24 * 7; // 1 week

import { getProductBySlug } from "@/actions";
import { Slideshow, SlideshowMobile } from "@/components";
import { StockLabel } from "@/components/product/stock-label/StockLabel";
import { montserrat } from "@/config/font";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { AddToCart } from "./ui/AddToCart";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const slug = params.slug;

  const product = await getProductBySlug(slug);

  return {
    title: product?.title ?? "Producto no encontrado",
    description: product?.description ?? "",
    openGraph: {
      title: product?.title ?? "Producto no encontrado",
      description: product?.description ?? "",
      images: [`/products/${product?.images[1]}`],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2">
        <SlideshowMobile
          images={product.images}
          title={product.title}
          className="block md:hidden"
        />

        <Slideshow
          images={product.images}
          title={product.title}
          className="hidden md:block"
        />
      </div>

      <div className="col-span-1 px-5">
        <StockLabel slug={slug} />
        <h1 className={`${montserrat.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>

        <AddToCart product={product} />

        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
