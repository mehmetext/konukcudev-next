"use client";

import { motion } from "framer-motion";

export default function OpacityFromTop({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <motion.main
      className="flex flex-col gap-20"
      initial={{ transform: "translateY(-20px)", opacity: 0 }}
      animate={{ transform: "translateY(0px)", opacity: 1 }}
    >
      {children}
    </motion.main>
  );
}
