import "./globals.css";
import type { Metadata } from "next";
import { inter } from "@/config/font";

export const metadata: Metadata = {
  title: "Teslo | Shop",
  description: "Teslo Shop",
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
