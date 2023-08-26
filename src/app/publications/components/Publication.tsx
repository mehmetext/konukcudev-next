import Icon from "@/components/Icon";
import Link from "next/link";
import { forwardRef } from "react";

import { motion } from "framer-motion";

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
      </motion.div>
    );
  }
);

export default Publication;
