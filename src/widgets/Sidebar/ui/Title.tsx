import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { Logo } from "@/assets";

export const Title = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Link
      href="#"
      className="mr-auto flex w-fit items-center justify-start gap-2"
    >
      <span className="h-[36px] w-[36px] flex-shrink-0 p-[3px]">
        <Logo className="h-full w-full" />
      </span>

      <AnimatePresence>
        {isOpen && (
          <motion.h1
            initial={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
            className="text-2xl font-semibold whitespace-nowrap text-[#fff]"
          >
            OpenSea
          </motion.h1>
        )}
      </AnimatePresence>
    </Link>
  );
};
