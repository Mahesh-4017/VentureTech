"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Direction = "up" | "down" | "left" | "right" | "fade";

interface AnimateOnViewProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  className?: string;
  once?: boolean;
  amount?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

const variantsMap: Record<Direction, Variants> = {
  up:    { hidden: { opacity: 0, y: 36  }, visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -36 }, visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40  }, visible: { opacity: 1, x: 0 } },
  fade:  { hidden: { opacity: 0         }, visible: { opacity: 1       } },
};

export default function AnimateOnView({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  className,
  once = true,
  amount = 0.15,
  as = "div",
}: AnimateOnViewProps) {
  const { ref, inView } = useInView({ triggerOnce: once, threshold: amount });

  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variantsMap[direction]}
      transition={{ duration, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/* ── Stagger container helper ── */
export function StaggerContainer({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  once = true,
  amount = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: once, threshold: amount });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden:  {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger child item ── */
export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden:  variantsMap[direction].hidden,
        visible: { ...(variantsMap[direction].visible as object), transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}
