import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const share_Tech_Mono = Share_Tech_Mono({
  variable: "--font-share_Tech_Mono",
  subsets: ["latin"],
  weight: ["400"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Haider - Full stack web developer",
  description: "Showcasing my work and talent!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${raleway.className} ${cormorantGaramond.variable} ${share_Tech_Mono.variable} bg-background antialiased`}
      >
        <NavBar />

        {children}
      </body>
    </html>
  );
}
