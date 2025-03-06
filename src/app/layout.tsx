import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Footer from './_components/sections/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danial Safari - Frontend Developer",
  description: "Personal portfolio showcasing my work and skills in web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased scrollbar-custom`}>
        <ThemeProvider>
          <Navbar />
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
