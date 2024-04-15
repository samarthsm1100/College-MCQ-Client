import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ResultsContextProvider } from "@/contexts/ResultsContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MCQ Test",
  description:
    "A platform created for Online MCQ Tests for UG Students of PICT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <ResultsContextProvider>
          <Providers>{children}</Providers> 
        </ResultsContextProvider>
      </body>
    </html>
  );
}
