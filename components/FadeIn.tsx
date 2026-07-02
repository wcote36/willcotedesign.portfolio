"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "li";
};

export function FadeIn({ children, className, as = "div" }: FadeInProps) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
