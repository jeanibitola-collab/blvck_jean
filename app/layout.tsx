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

export const metadata = {
  metadataBase: new URL("https://olakunle-ibitola.vercel.app"),
  title: "Olakunle Ibitola | Web & Mobile Developer",
  description:
    "I build online stores, business websites and mobile games with React, Next.js and TypeScript.",
  openGraph: {
    title: "Olakunle Ibitola | Web & Mobile Developer",
    description:
      "Online stores, business websites and mobile games with React, Next.js and TypeScript.",
    url: "https://olakunle-ibitola.vercel.app",
    siteName: "Olakunle Ibitola",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Olakunle Ibitola, Web & Mobile Developer",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olakunle Ibitola | Web & Mobile Developer",
    description:
      "Online stores, business websites and mobile games with React, Next.js and TypeScript.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
