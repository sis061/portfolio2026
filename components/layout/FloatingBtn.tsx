"use client";
import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";
import { CircleArrowUp, Mail, MessageCircleMore, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

export default function ScrollTopBtn({
  isFooterVisible = false,
}: {
  isFooterVisible?: boolean;
}) {
  const [open, setOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    isFooterVisible && setOpen(false);
  }, [isFooterVisible]);

  return (
    <>
      <div
        className={cn(
          "fixed bottom-4 right-4 md:bottom-8 md:right-12 z-50 transition-all duration-500 ease-in-out",
        )}
      >
        <AnimatePresence mode="wait">
          {!open && (
            <motion.button
              key="FAB"
              layoutId="contact-btn"
              className={cn(
                "rounded-full shadow-xl !cursor-pointer relative w-12 h-12",
              )}
              aria-label="see contact"
              onClick={() => {
                isFooterVisible ? scrollToTop() : setOpen(true);
              }}
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
              <motion.span
                className="absolute inset-0 flex items-center justify-center"
                animate={{ opacity: isFooterVisible ? 0 : 1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <MessageCircleMore
                  color="#010101"
                  className="w-12 h-12 text-black fill-white/95"
                />
              </motion.span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="contact-btn"
            className="z-50 fixed bottom-4 right-4 md:bottom-8 md:right-12 rounded-3xl bg-white/99 shadow-2xl overflow-hidden"
            style={{ transformOrigin: "bottom right" }}
          >
            <div className="w-full h-full pt-6 pb-4 px-4 flex flex-col gap-4 relative ">
              <h3 className="text-xl font-bold">Contact</h3>
              <button
                onClick={() => setOpen(false)}
                className="absolute top-1.5 right-1.5 z-10 h-8 w-8 flex items-center justify-center rounded-full hover:bg-black/5 cursor-pointer active:scale-95 "
              >
                <X size={18} />
              </button>

              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1 },
                }}
                className="w-full flex flex-col space-y-2 "
              >
                <li>
                  <Link
                    href="tel:010-9245-0215"
                    className="text-lg flex items-center gap-2 transition-transform duration-200 ease-in-out scale-100 touch-manipulation active:scale-95"
                  >
                    <Phone size={20} />
                    010-9245-0215
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:sis061@naver.com"
                    className="text-lg flex items-center gap-2 transition-transform duration-200 ease-in-out scale-100 touch-manipulation active:scale-95"
                  >
                    <Mail size={20} />
                    sis061@naver.com
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/sis061"
                    className="text-lg flex items-center gap-2 transition-transform duration-200 ease-in-out scale-100 touch-manipulation active:scale-95"
                  >
                    <Image
                      src="/images/github_480.svg"
                      alt="github logo"
                      width={20}
                      height={20}
                    />
                    Github
                  </Link>
                </li>
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
