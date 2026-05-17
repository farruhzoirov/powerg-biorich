import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PowerG Biorich — Tabiiy Mahsulotlar",
  description:
    "PowerG Biorich — Malayziyadan olib kelingan sifatli tabiiy mahsulotlar. Sog'liq va farovonlik uchun eng yaxshi tanlov.",
  keywords: ["PowerG Biorich", "tabiiy mahsulotlar", "Malayziya", "sog'liq"],
  openGraph: {
    title: "PowerG Biorich",
    description: "Malayziyadan tabiiy mahsulotlar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
