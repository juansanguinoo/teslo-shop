import type { Size } from "@/interfaces";
import clsx from "clsx";
import React from "react";

interface SizeSelectorProps {
  selectedSize?: Size;
  availableSizes: Size[];
  onSizeChange?: (size: Size) => void;
}

export const SizeSelector = ({
  selectedSize,
  availableSizes,
  onSizeChange,
}: SizeSelectorProps) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Tallas disponibles</h3>

      <div className="flex">
        {availableSizes.map((size) => (
          <button
            className={clsx("mx-2 hover:underline text-lg", {
              underline: size === selectedSize,
            })}
            key={size}
            onClick={() => onSizeChange?.(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
