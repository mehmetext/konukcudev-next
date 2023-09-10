import cn from "@/lib/utils/cn";

export default function PrideItem({
  icon,
  alt,
  className,
}: {
  icon: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center p-5 rounded-2xl",
        className
      )}
    >
      <img src={icon} alt={alt} />
    </div>
  );
}
