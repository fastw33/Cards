import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { AosProvider } from "@/components/AosProvider";
import "aos/dist/aos.css";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Genika | Tarjetas digitales, directorios y landings",
  description:
    "Pagina de venta para tarjetas digitales, directorios de contacto y landings express para empresas."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        <AosProvider />
        {children}
      </body>
    </html>
  );
}
