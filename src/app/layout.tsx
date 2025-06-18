import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
});

export const metadata: Metadata = {
  title: "Low Miles Auto",
  description: "Low Miles Auto is a car dealership that sells cars at a low price in North Western Suncrest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased w-screen h-screen bg-white dark:bg-black ${roboto.className}`}
      >
        <Navigation />
          {children}
        <Footer />
      </body>
    </html>
  );
}
