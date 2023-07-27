import Menu from "../components/Menu";

export default function PageLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <Menu />
      <main className="flex flex-col gap-20">{children}</main>
    </>
  );
}
