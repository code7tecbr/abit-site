import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ABIT Projetos & Engenharia | Engenharia e Construção Civil",
  description:
    "Engenharia e Construção Civil com Excelência, Inovação e Profissionalismo. Projetos arquitetônicos, estruturais, elétricos, hidrossanitários e mais.",
  keywords: [
    "engenharia",
    "construção civil",
    "projetos arquitetônicos",
    "projetos estruturais",
    "Recife",
    "Pernambuco",
  ],
  authors: [{ name: "ABIT Projetos & Engenharia" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "ABIT Projetos & Engenharia",
    description:
      "Engenharia e Construção Civil com Excelência, Inovação e Profissionalismo",
    siteName: "ABIT Projetos & Engenharia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
