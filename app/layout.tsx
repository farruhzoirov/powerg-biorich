import type { Metadata, Viewport } from "next";
import { Manrope, Unbounded } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";
import { ThemeProvider } from "@/context/ThemeContext";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Power-G Bio Rich — Tabiiy sog'lomlashtirish mahsulotlari",
  description:
    "Power-G Bio Rich — Malayziyaning JJ Asia zavodi bilan hamkorlikda ishlab chiqarilgan halol, GMP va HACCP sertifikatli tabiiy mahsulotlar. Qora zanjabil asosidagi sog'lom hayot kolleksiyasi.",
  keywords: ["Power-G Bio Rich", "qora zanjabil", "tabiiy mahsulotlar", "Malayziya", "sog'lom hayot", "halol"],
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "Power-G Bio Rich",
    description: "Malayziyadan tabiiy sog'lomlashtirish mahsulotlari",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6fbf8" },
    { media: "(prefers-color-scheme: dark)", color: "#061221" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className={`${manrope.variable} ${unbounded.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("powerg-theme");if(t==="dark"){document.documentElement.classList.add("dark")}else if(t==="light"){document.documentElement.classList.remove("dark")}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
