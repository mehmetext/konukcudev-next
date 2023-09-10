"use client";

import Publication from "./Publication";
import { motion } from "framer-motion";

export default function PublicationsMotion({
  publications,
}: {
  publications: Publication[];
}) {
  return (
    <motion.div
      variants={{
        hidden: {},
        visible: {
          transition: { delayChildren: 0.2, staggerChildren: 0.05 },
        },
      }}
      initial="hidden"
      animate="visible"
      className="flex w-full flex-col gap-5"
    >
      {publications.map((publication, i) => (
        <Publication
          key={i}
          icon={publication.icon}
          href={publication.href}
          title={publication.title}
          date={publication.date}
        />
      ))}
    </motion.div>
  );
}
