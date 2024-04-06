import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import "./globals.css";
import NavHeader from "@/components/nav-header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* https://docs.saturn.tech/fetching-from-saturn#0fd2ebd8ca11499891917dde4c04fc91 */}
       {/* <Script async src="https://saturn.tech/widget.js"> */}
      <body className={inter.className}>
        <NavHeader />
        <div>{children}</div>
      </body>
    </html>
  );
}
