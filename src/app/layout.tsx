import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wildevera — Where Conviction Meets Compassion",
  description:
    "Wildevera connects U.S. small businesses with skilled, English-speaking virtual assistants through dignified remote work and professional training.",
  keywords: [
    "virtual assistant",
    "remote work",
    "small business",
    "VA services",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable} data-scroll-behavior="smooth"`}
    >
      <body className="anim-ready">{children}</body>
    </html>
  );
}
