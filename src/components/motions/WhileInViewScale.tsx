"use client";

import { motion } from "framer-motion";

export default function WhileInViewScale({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <motion.main
      transition={{ delay: 0.1 }}
      initial={{ translateY: 30, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.main>
  );
}
