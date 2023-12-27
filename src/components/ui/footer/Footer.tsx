import React from "react";
import Link from "next/link";
import { montserrat } from "@/config/font";

export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-10">
      <Link href="/">
        <span className={`${montserrat.className} antialiased font-bold `}>
          Teslo{" "}
        </span>
        <span>| shop </span>
        <span>© {new Date().getFullYear()}</span>
      </Link>

      <Link href="/" className="mx-3">
        Privacidad & Legal
      </Link>

      <Link href="/" className="mx-3">
        Ubicaciones
      </Link>
    </div>
  );
};
