import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";

import { EB_Garamond } from "next/font/google";
import Footer from "./components/footer";


import Header from "./components/header";
//Header so é carregado no navegaodr nao no build do servidor 




 



const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: " Comunidade Catolica Online",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${ebGaramond.variable} font-garamond `}
      >

        <Header></Header>
        {children}
        <Footer></Footer>
      </body>

    </html>
  );
}
