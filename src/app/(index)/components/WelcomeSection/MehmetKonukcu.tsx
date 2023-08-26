"use client";

import ComponentNameContainer from "@/components/ComponentNameContainer";
import { motion } from "framer-motion";

export default function MehmetKonukcu() {
  return (
    <ComponentNameContainer name="MehmetKonukcu">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="font-black text-[9vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark"
      >
        {"<MehmetKonukçu/>"}
      </motion.div>
    </ComponentNameContainer>
  );
}
