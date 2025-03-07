import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./_components/layout/Header";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Footer from './_components/sections/Footer';

const montserrat = Montserrat({ subsets: ["latin"] });

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
      <body className={`${montserrat.className} antialiased scrollbar-custom`}>
        <ThemeProvider>
          <Header />
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
