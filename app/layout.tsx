import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Next 14/15 might use local fonts or google
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Webdoo — Modern Web Development Solutions",
  description: "AI-powered web development agency by Vasu G. Premium websites, full-stack applications, and designs that scale.",
  icons: {
    icon: "/webdoo-logo.svg",
    shortcut: "/webdoo-logo.svg",
    apple: "/webdoo-logo.svg",
  },
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased min-h-screen bg-background text-foreground selection:bg-neon-purple/30 selection:text-neon-pink flex flex-col"
        )}
      >
        <Navbar />
        <main className="pt-20 flex-grow"> {/* Add padding top for fixed navbar */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
