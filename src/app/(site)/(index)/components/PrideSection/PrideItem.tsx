"use client";

import Confetti from "@/components/Confetti";
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
    <Confetti
      component={
        <div className={cn("rounded-md p-2 border border-white", className)}>
          <img src={icon} alt={alt} className="h-4" />
        </div>
      }
    >
      {(onClick) => (
        <div
          onClick={onClick}
          className={cn(
            "cursor-pointer flex items-center justify-center p-5 rounded-2xl select-none",
            className
          )}
        >
          <img src={icon} alt={alt} />
        </div>
      )}
    </Confetti>
  );
}
