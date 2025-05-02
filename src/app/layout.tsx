import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kiwify Challenge",
  description: "Kiwify Front-end Challenge",
  icons: {
    icon: "/kiwiy.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen min-w-screen bg-white `}>
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  );
}
