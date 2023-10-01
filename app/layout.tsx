import "./globals.css";
import type { Metadata } from "next";
import { Inter, Lugrasimo } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font--inter",
  fallback: ["Arail", "sans serif"],
  adjustFontFallback: false,
});

const lugrasimo = Lugrasimo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font--lugrasimo",
  fallback: ["Arail", "sans serif"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Jérôme LEFEUVRE - Développeur Web",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${lugrasimo.variable}`} id="test">
        {children}
      </body>
    </html>
  );
}
