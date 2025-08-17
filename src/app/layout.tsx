import { TempoInit } from "@/components/tempo-init";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Roboto_Flex } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const robotoFlex = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Courtinex Webstudio - Digital Service Agency",
  description:
    "Professional web development, digital marketing, and SEO services for modern businesses",
     icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      <body
        className={
          inter.className +
          " overflow-x-hidden bg-black " +
          robotoFlex.className
        }
      >
        {children}
        <TempoInit />
      </body>
    </html>
  );
}
