import { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

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
      <body className="font-nunito font-semibold">
        <Menu />
        <main className="flex flex-col gap-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
