import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Import Inter
import "./globals.css";

// Configure Inter
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Stompy Mwendwa | Professional Portfolio",
  description: "Senior DevOps & Platform Reliability Engineer - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
