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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.main>
  );
}
