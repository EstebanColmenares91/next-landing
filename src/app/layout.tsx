import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { textoVineta, descripcionPagina } from "@/lib/title";
import "./globals.css";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: textoVineta,
  description: descripcionPagina,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
