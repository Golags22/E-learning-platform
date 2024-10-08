import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavResponsiveness from "@/components/Home/Navbar/NavResponsiveness";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Learning With Wow",
  description: "E-learing website Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavResponsiveness />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
