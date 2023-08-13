"use client";

import Icon from "@/components/Icon";
import Link from "next/link";

type Props = {
  icon: string;
  href: string;
  title: string;
  date: string;
};

export default function Publication({ icon, href, title, date }: Props) {
  return (
    <div className="flex gap-2.5">
      <div className="shrink-0 flex h-6 w-6 sm:h-12 sm:w-12">
        <Icon name={icon} className="w-full h-full" />
      </div>
      <div className="flex-1 sm:pt-2.5 items-start flex text-primary-dark font-black sm:text-xl">
        <Link target="_blank" href={href}>
          {title}
        </Link>
      </div>
      <div className="flex items-start sm:pt-2.5">
        <div className="text-xs text-[#636363] px-2.5 py-1 bg-bright rounded-full">
          {date}
        </div>
      </div>
    </div>
  );
}
