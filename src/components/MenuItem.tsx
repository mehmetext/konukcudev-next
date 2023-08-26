"use client";

import cn from "@/lib/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function MenuItem({ href, children }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "relative shrink-0 flex items-center justify-center text-center font-black gap-1 p-3 sm:py-3 sm:px-4 rounded-full transition",
        { "text-white": isActive }
      )}
    >
      {children}
      <motion.div
        initial={false}
        variants={{
          deactive: { opacity: 0, scale: 0 },
          active: { opacity: 1, scale: 1 },
        }}
        animate={isActive ? "active" : "deactive"}
        className="absolute -z-10 left-0 top-0 right-0 bottom-0 bg-gradient-to-r from-primary-dark to-primary rounded-full"
      ></motion.div>
    </Link>
  );
}

/* ${
        isActive
          ? "bg-gradient-to-r from-primary-dark to-primary text-white"
          : "bg-white text-custom-gray"
      } */
