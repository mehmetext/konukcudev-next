import { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { Nunito } from "next/font/google";
import cn from "@/lib/utils/cn";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "400", "600", "900"],
});

export const metadata: Metadata = {
  title: "Mehmet Konukçu",
  description: "Mehmet Konukçu'nun Kişisel Web Sitesi",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={cn(nunito.className, "font-semibold")}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
