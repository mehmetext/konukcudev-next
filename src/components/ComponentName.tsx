export default function ComponentName({ name }: { name: string }) {
  return (
    <div className="font-extralight text-xs sm:text-sm bg-bright px-2 py-1 rounded-full text-custom-gray">
      {name}.tsx
    </div>
  );
}
