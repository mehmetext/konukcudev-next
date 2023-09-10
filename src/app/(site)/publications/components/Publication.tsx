import Icon from "@/components/Icon";
import Link from "next/link";
import { forwardRef } from "react";

import { motion } from "framer-motion";
import cn from "@/lib/utils/cn";

type Props = {
  icon: string;
  href: string;
  title: string;
  date: string;
};

const Publication = forwardRef<HTMLDivElement, Props>(
  ({ icon, href, title, date }, ref) => {
    return (
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 20,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        className="flex gap-2.5"
      >
        <div className="shrink-0 flex h-6 w-6 sm:h-12 sm:w-12">
          <Icon name={icon} className="w-full h-full" />
        </div>
        <div className="flex-1 sm:pt-2.5">
          <Link
            className="text-primary-dark font-black sm:text-xl"
            target="_blank"
            href={href}
          >
            {title}
          </Link>{" "}
          <DateComponent className="inline-flex sm:hidden">
            ({date})
          </DateComponent>
        </div>
        <div className="hidden sm:flex items-start sm:pt-2.5">
          <DateComponent>{date}</DateComponent>
        </div>
      </motion.div>
    );
  }
);

export function DateComponent({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "text-xs text-[#636363] px-2.5 py-1 bg-bright rounded-full",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Publication;
