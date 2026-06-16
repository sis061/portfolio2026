"use client";

import Link from "next/link";
import Image from "next/image";

import { Mail, Phone } from "lucide-react";
import { useRef } from "react";
import { useFooterVisibility } from "@/hooks/useFooterVisibility";
import FloatingBtn from "./layout/FloatingBtn";
import ScrollTop from "./layout/ScrollToTop";

export default function Contact() {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const isFooterVisible = useFooterVisibility(footerRef, 0.1);

  return (
    <div
      ref={footerRef}
      className="flex flex-col lg:flex-row gap-4 lg:gap-10 w-full items-start max-lg:-mt-8"
    >
      <h3 className="text-3xl lg:text-4xl font-bold w-full lg:w-1/3 !min-w-64 flex-grow max-lg:border-b-2 border-black/25 pb-4 !text-blue-500">
        Contact
      </h3>
      <ul className="w-full lg:w-2/3 flex flex-col space-y-4">
        <li>
          <Link
            href="tel:010-9245-0215"
            className="text-xl flex items-center gap-2 transition-transform duration-200 ease-in-out scale-100 touch-manipulation active:scale-95"
          >
            <Phone size={20} />
            010-9245-0215
          </Link>
        </li>
        <li>
          <Link
            href="mailto:sis061@naver.com"
            className="text-xl flex items-center gap-2 transition-transform duration-200 ease-in-out scale-100 touch-manipulation active:scale-95"
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
            className="text-xl flex items-center gap-2 transition-transform duration-200 ease-in-out scale-100 touch-manipulation active:scale-95"
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
      <ScrollTop isFooterVisible={isFooterVisible} />
      <FloatingBtn isFooterVisible={isFooterVisible} />
    </div>
  );
}
