import { motion } from "framer-motion";
import { ConfettiParticleProps } from "./Confetti";

interface ParticleProps {
  particle: ConfettiParticleProps;
  children: React.ReactNode;
}

const ConfettiParticle: React.FC<ParticleProps> = ({ particle, children }) => {
  return (
    <motion.div
      key={particle.id}
      initial={{
        x: particle.startX,
        y: particle.startY,
        scale: 0,
        opacity: 1,
      }}
      animate={{
        x: particle.endX,
        y: particle.endY,
        scale: particle.endScale,
        opacity: [1, 1, 1, 1, 0],
        rotate: particle.endRotation,
      }}
      transition={{ duration: particle.duration }}
      className="select-none pointer-events-none absolute"
    >
      {children}
    </motion.div>
  );
};

export default ConfettiParticle;
