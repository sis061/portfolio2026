"use client";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { AtSign, Mail, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

export default function FloatingBtn({
  isFooterVisible = false,
}: {
  isFooterVisible?: boolean;
}) {
  const [open, setOpen] = useState(false);

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
                setOpen(true);
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 flex items-center justify-center"
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <AtSign
                  color="#010101"
                  className="w-12 h-12 text-black bg-white/95 rounded-full"
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
              <button
                onClick={() => setOpen(false)}
                className="absolute top-1.5 right-1.5 z-10 h-8 w-8 flex items-center justify-center rounded-full hover:bg-black/5 cursor-pointer active:scale-95 "
              >
                <X size={18} />
              </button>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1 },
                }}
                className="flex flex-col space-y-3"
              >
                <h3 className="text-xl font-bold !text-blue-500">Sections</h3>
                <div className="flex flex-col gap-1">
                  <a
                    href="#chin"
                    className="text-base transition-all hover:translate-x-2 active:scale-95"
                    onClick={() =>
                      setTimeout(() => {
                        setOpen(false);
                      }, 50)
                    }
                  >
                    - Channel-iN
                  </a>
                  <a
                    href="#birdsping"
                    className="text-base transition-all hover:translate-x-2 active:scale-95"
                    onClick={() =>
                      setTimeout(() => {
                        setOpen(false);
                      }, 50)
                    }
                  >
                    - BIRDSPING
                  </a>
                  <a
                    href="#project-1"
                    className="text-base transition-all hover:translate-x-2 active:scale-95"
                    onClick={() =>
                      setTimeout(() => {
                        setOpen(false);
                      }, 50)
                    }
                  >
                    - 대전 지하철 NOW! v2
                  </a>
                  <a
                    href="#project-2"
                    className="text-base transition-all hover:translate-x-2 active:scale-95"
                    onClick={() =>
                      setTimeout(() => {
                        setOpen(false);
                      }, 50)
                    }
                  >
                    - 아맞다약! / 아맞다밥!
                  </a>
                  <a
                    href="#project-3"
                    className="text-base transition-all hover:translate-x-2 active:scale-95"
                    onClick={() =>
                      setTimeout(() => {
                        setOpen(false);
                      }, 50)
                    }
                  >
                    - GRSBH.com
                  </a>
                </div>
              </motion.div>
              {!isFooterVisible && (
                <>
                  <hr />
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.1 },
                    }}
                    className="flex flex-col space-y-3"
                  >
                    <h3 className="text-xl font-bold !text-blue-500">
                      Contact
                    </h3>
                    <ul className="w-full flex flex-col space-y-2 ">
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
                    </ul>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
