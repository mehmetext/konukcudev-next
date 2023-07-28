"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
      className={`shrink-0 flex items-center justify-center text-center font-black gap-1 p-3 sm:py-3 sm:px-4 rounded-full ${
        isActive
          ? "bg-gradient-to-r from-primary-dark to-primary text-white"
          : "bg-white text-custom-gray"
      }`}
    >
      {children}
    </Link>
  );
}
