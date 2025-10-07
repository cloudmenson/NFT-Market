import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/shared";

export const NavigationItem = ({ nav, isOpen }) => {
  return (
    <Link
      href={nav.label}
      className={cn(
        "flex w-full items-center justify-start rounded-[6px] text-[#acadae] hover:bg-[#26272d] hover:text-[#fff]",
        nav.active && "bg-[#26272d] text-[#fff]"
      )}
    >
      <span className="h-[36px] w-[36px] flex-shrink-0 p-[8px]">
        <nav.Icon />
      </span>

      <AnimatePresence>
        {isOpen && (
          <motion.span
            initial={{ opacity: 0 }}
            className="whitespace-nowrap"
            transition={{ duration: 0.25, ease: "easeOut" }}
            animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
          >
            {nav.label}
          </motion.span>
        )}
      </AnimatePresence>
    </Link>
  );
};
