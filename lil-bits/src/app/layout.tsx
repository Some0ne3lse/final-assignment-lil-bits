import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { OrderProvider } from "./context/OrderContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// I used chatGPT here to find the correct place to place the OrderProvider

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <OrderProvider>
        <body className={inter.className}>{children}</body>
      </OrderProvider>
    </html>
  );
}
