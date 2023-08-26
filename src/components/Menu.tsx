"use client";

import { HiHome, HiTemplate } from "react-icons/hi";
import { MdMenuBook } from "react-icons/md";
import MenuItem from "./MenuItem";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Menu() {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      className={`w-full flex justify-center z-10 py-8 top-0 pointer-events-none ${
        pathname !== "/" ? "sticky" : "fixed"
      }`}
    >
      <div className="bg-black bg-opacity-5 backdrop-blur-md top-8 flex rounded-full gap-1.5 p-1.5 sm:gap-2.5 sm:p-2.5 pointer-events-auto">
        <MenuItem href="/">
          <HiHome className="text-2xl" />
          <span className="hidden sm:flex">Ana Sayfa</span>
        </MenuItem>
        <MenuItem href="/publications">
          <MdMenuBook className="text-2xl" />
          <span className="hidden sm:flex">Yayınlar</span>
        </MenuItem>
        <MenuItem href="/references">
          <HiTemplate className="text-2xl" />
          <span className="hidden sm:flex">Referanslar</span>
        </MenuItem>
      </div>
    </motion.div>
  );
}
