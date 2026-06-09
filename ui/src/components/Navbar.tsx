"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Logo } from "@/components/Logo";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 h-16 sm:h-20 z-50 flex items-center justify-between px-6 sm:px-12 lg:px-20 backdrop-blur-md bg-page/80 border-b border-chalk shadow-sm"
    >
      <Link
        href="/"
        className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vermillion rounded-md"
      >
        <Logo
          size={40}
          className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105"
        />
        <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-ink leading-none flex items-baseline gap-1">
          Fake
          <span className="text-vermillion">.</span>
          Email
        </span>
      </Link>

    </motion.nav>
  );
}
