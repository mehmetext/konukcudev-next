"use client";

import ReferenceItem from "./ReferenceItem";
import Container from "@/components/Container";
import { motion } from "framer-motion";

export default function ReferencesComponent({
  references,
}: {
  references: Reference[];
}) {
  return (
    <Container>
      <motion.div
        variants={{
          hidden: {},
          visible: {
            transition: { delayChildren: 0.2, staggerChildren: 0.05 },
          },
        }}
        initial="hidden"
        animate="visible"
        className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
      >
        {references.map((reference, i) => (
          <ReferenceItem key={i} reference={reference} />
        ))}
      </motion.div>
    </Container>
  );
}
