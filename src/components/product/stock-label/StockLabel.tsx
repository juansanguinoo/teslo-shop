"use client";

import { getStockBySlug } from "@/actions";
import { montserrat } from "@/config/font";
import { useEffect, useState } from "react";

interface StockLabelProps {
  slug: string;
}

export const StockLabel = ({ slug }: StockLabelProps) => {
  const [stock, setStock] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getStock();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getStock = async () => {
    const inStock = await getStockBySlug(slug);
    setStock(inStock);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <h1
          className={` ${montserrat.className} antialiased font-bold text-lg bg-gray-200 animate-pulse `}
        >
          &nbsp;
        </h1>
      ) : (
        <h1
          className={` ${montserrat.className} antialiased font-bold text-lg`}
        >
          Stock: {stock}
        </h1>
      )}
    </>
  );
};
