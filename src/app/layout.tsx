import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const dinRoundPro = localFont({
  src: [
    {
      path: "../../public/assets/fonts/dinroundpro_light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/dinroundpro.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/dinroundpro_medi.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/dinroundpro_bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/dinroundpro_black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-din-round-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BeroCN",
  description: "Tema de Shadcn para a BeroLab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dinRoundPro.variable} ${dinRoundPro.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
