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
  description:
    "Bienvenue dans mon portfolio ! Je suis Jérôme LEFEUVRE, un passionné de développement. À travers ces pages, je vous invite à explorer mon parcours professionnel et mes compétences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${lugrasimo.variable}`}>
        {children}
      </body>
    </html>
  );
}
