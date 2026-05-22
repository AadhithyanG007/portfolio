import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/lenis-provider";
import ScrollProgress from "@/components/ui/scroll-progress";
import UnifiedBackground from "@/components/ui/unified-background";
import ScrollToTop from "@/components/scroll-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aadhithyan G | Portfolio",
  description:
    "Full-stack developer building clean, scalable systems that solve real-world problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UnifiedBackground />
        <LenisProvider>
          <ScrollToTop />
          <ScrollProgress />
          <div className="relative z-10">{children}</div>
        </LenisProvider>
      </body>
    </html>
  );
}
