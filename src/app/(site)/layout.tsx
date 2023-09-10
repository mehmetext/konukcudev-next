import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
}
