"use client";

import { useEffect, useState } from "react";
import ConfettiParticle from "./ConfettiParticle";

interface Props {
  children?: (
    onClick: React.MouseEventHandler<HTMLDivElement>
  ) => React.ReactNode;
  component: React.ReactNode;
}

export interface ConfettiParticleProps {
  id: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  endScale: number;
  endRotation: number;
  duration: number;
}

export default function Confetti({ children, component }: Props) {
  const [particles, setParticles] = useState<ConfettiParticleProps[]>([]);

  const onClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const startX = e.pageX - e.currentTarget.offsetLeft;
    const startY =
      e.pageY -
      e.currentTarget.offsetTop -
      e.currentTarget.getBoundingClientRect().height;

    const key = Math.random().toString(36).substring(2);

    const list: ConfettiParticleProps[] = [];

    for (let i = 0; i < 30; i++)
      list.push({
        id: `${key}-${i}`,
        startX: startX,
        startY: startY,
        endX: startX + Math.random() * 400 - 200,
        endY: startY - Math.random() * 150 - 75,
        endScale: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 1 + 1,
        endRotation: Math.random() * 180 - 90,
      });

    setTimeout(() => {
      setParticles((old) =>
        old.filter((particle) => !particle.id.startsWith(key))
      );
    }, 2000); //default: 2000

    setParticles((old) => [...old, ...list]);
  };

  return (
    <div>
      {children ? children(onClick) : null}
      {particles.map((particle) => (
        <ConfettiParticle key={particle.id} particle={particle}>
          {component}
        </ConfettiParticle>
      ))}
    </div>
  );
}
