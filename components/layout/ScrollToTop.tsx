"use client";

import { CircleArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

export default function ScrollTop({
  isFooterVisible = false,
}: {
  isFooterVisible?: boolean;
}) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className={cn(
          "fixed bottom-18 right-4 md:bottom-22 md:right-12 z-50 transition-all duration-500 ease-in-out",
          isFooterVisible ? "visible" : "hidden",
        )}
      >
        <AnimatePresence mode="wait">
          <motion.button
            className={cn(
              "rounded-full shadow-xl !cursor-pointer relative w-12 h-12",
            )}
            aria-label="scroll to top"
            onClick={scrollToTop}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 flex items-center justify-center"
              animate={{ opacity: isFooterVisible ? 1 : 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <CircleArrowUp
                color="#010101"
                className="w-12 h-12 text-black fill-white/95"
              />
            </motion.span>
          </motion.button>
        </AnimatePresence>
      </div>
    </>
  );
}
