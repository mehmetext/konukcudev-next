"use client";

import Icon from "./Icon";
import { motion } from "framer-motion";

type Props = {
  itemClassName?: string;
  gapClassName?: string;
  items: string[];
  centered?: boolean;
};

export default function TechStack({
  itemClassName,
  gapClassName = "gap-1 sm:gap-1.5 md:gap-2.5",
  items,
  centered = false,
}: Props) {
  return (
    <motion.div
      variants={{
        hidden: {},
        visible: {
          transition: { delayChildren: 0.2, staggerChildren: 0.03 },
        },
      }}
      initial="hidden"
      animate="visible"
      className={`flex flex-wrap ${gapClassName} ${
        centered ? "justify-center" : ""
      }`}
    >
      {items.map((tech, i) => (
        <motion.div
          key={i}
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
        >
          <Icon name={tech} className={itemClassName} />
        </motion.div>
      ))}
    </motion.div>
  );
}
