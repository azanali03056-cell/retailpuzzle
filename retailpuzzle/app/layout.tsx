import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/features/navbar/Navbar";
import { Footer } from "@/components/features/footer/Footer";
import { CartDrawer } from "@/components/features/cart/CartDrawer";

export const metadata: Metadata = {
  title: { default: "RetailPuzzle — Every Piece Fits", template: "%s | RetailPuzzle" },
  description: "AI-first adaptive commerce. RetailPuzzle learns your style and assembles the perfect shopping experience — just for you.",
  keywords: ["ecommerce", "AI shopping", "personalized", "online store", "RetailPuzzle"],
  authors: [{ name: "RetailPuzzle" }],
  creator: "RetailPuzzle",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://retailpuzzle.com",
    title: "RetailPuzzle — Every Piece Fits",
    description: "AI-first adaptive commerce. Personalized for you.",
    siteName: "RetailPuzzle",
  },
  twitter: {
    card: "summary_large_image",
    title: "RetailPuzzle — Every Piece Fits",
    description: "AI-first adaptive commerce. Personalized for you.",
    creator: "@retailpuzzle",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-primary antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
