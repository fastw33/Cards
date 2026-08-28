import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { AosProvider } from "@/components/AosProvider";
import { siteByMarket } from "@/data/site";
import { getMarketFromRequest } from "@/lib/market";
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

export async function generateMetadata(): Promise<Metadata> {
  const market = await getMarketFromRequest();
  const site = siteByMarket[market];

  return {
    title: site.meta.title,
    description: site.meta.description
  };
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const market = await getMarketFromRequest();
  const site = siteByMarket[market];

  return (
    <html lang={site.locale}>
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        <AosProvider />
        {children}
      </body>
    </html>
  );
}
