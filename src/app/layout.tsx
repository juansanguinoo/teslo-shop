import "./globals.css";
import type { Metadata } from "next";
import { inter } from "@/config/font";

export const metadata: Metadata = {
  title: {
    template: "%s | Teslo Shop",
    default: "Home | Teslo Shop",
  },
  description: "Online shop for Teslo products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
