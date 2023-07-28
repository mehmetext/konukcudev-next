import ComponentName from "./ComponentName";

export default function ComponentNameContainer({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 items-start">
      <ComponentName name={name} />
      {children}
    </div>
  );
}
