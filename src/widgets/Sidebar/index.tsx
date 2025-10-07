"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Title } from "./ui/Title";
import { Navigation } from "./ui/Navigation";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.aside
      initial={{ width: 52 }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      transition={{
        duration: 0.15,
      }}
      animate={{ width: isOpen ? 225 : 52 }}
      className="fixed top-0 left-0 z-50 flex h-full flex-col items-center gap-2 overflow-hidden border-r border-[#26272D] bg-[#141415] px-[8px] py-[16px] select-none"
    >
      <Title isOpen={isOpen} />

      <Navigation isOpen={isOpen} />
    </motion.aside>
  );
};
