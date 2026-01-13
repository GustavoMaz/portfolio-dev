import type { Metadata } from "next";
import "./globals.css";
import MainNavigation from "@/components/MainNavigation";
import MainFooter from "@/components/MainFooter";

export const metadata: Metadata = {
  title: "Gustavo Mazurkiewitz - Desenvolvedor",
  description: "Portfólio de Desenvolvedor Front-End",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Reddit+Sans+Condensed:wght@200..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <MainNavigation />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
