import Menu from "../components/Menu";

export default function PageLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <Menu />
      {children}
    </>
  );
}
