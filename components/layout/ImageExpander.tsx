"use client";

import { useEffect, useState } from "react";
import { ListChevronsDownUp, ListChevronsUpDown, ZoomIn } from "lucide-react";
import { ZoomableImage } from "@/components/layout/ZoomableImage";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ImageExpander({
  imgSrc,
  loading = "lazy",
}: {
  imgSrc: string[];
  loading?: "eager" | "lazy";
}) {
  const [expanded, setExpanded] = useState(false);
  const [lastImageHeight, setLastImageHeight] = useState(300);

  const imageWidth = 280;
  const foldedGap = 36;

  useEffect(() => {
    const lastSrc = imgSrc.at(-1);

    if (!lastSrc) return;

    const img = new window.Image();

    img.onload = () => {
      const ratio = img.naturalHeight / img.naturalWidth;
      setLastImageHeight(imageWidth * ratio);
    };

    img.src = `/images/${lastSrc}`;
  }, [imgSrc]);

  const foldedHeight =
    Math.max(imgSrc.length - 1, 0) * foldedGap + lastImageHeight;

  return (
    <div className="!min-w-64 w-full h-full space-y-4 lg:w-1/3">
      <div className="flex flex-col gap-4 w-full">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setExpanded((prev) => !prev);
          }}
          className="w-full flex items-center gap-2 text-left cursor-pointer"
        >
          {expanded ? (
            <ListChevronsDownUp size={16} className="animate-pulse" />
          ) : (
            <ListChevronsUpDown size={16} className="animate-pulse" />
          )}

          <span className="text-sm font-light">
            {expanded ? "접기" : "이미지를 눌러 펼칠 수 있습니다."}
          </span>
        </button>
        {expanded && (
          <div className="flex items-center gap-2 text-left w-full">
            <ZoomIn size={16} className="animate-pulse" />
            <span className="text-sm font-light opacity-75">
              이미지를 눌러 확대할 수 있습니다.
            </span>
          </div>
        )}
      </div>

      <motion.div
        layout
        onClick={() => {
          if (!expanded) {
            setExpanded(true);
          }
        }}
        animate={{
          height: expanded ? "100%" : foldedHeight,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 24,
        }}
        className={cn(
          "relative w-full cursor-pointer flex flex-wrap items-center !min-w-64 lg:items-start justify-center gap-4 h-full transition-transform duration-200 ease-in-out",
          !expanded && "active:scale-95 hover:scale-95",
        )}
      >
        {imgSrc.map((src, i) => {
          const foldedTop = i * foldedGap;

          return (
            <motion.div
              key={src}
              layout
              onClick={(e) => {
                if (expanded) {
                  e.stopPropagation();
                }
              }}
              animate={{
                top: expanded ? 0 : foldedTop,
                rotate: expanded ? 0 : -4 + i * 2,
                scale: expanded ? 1 : 0.96,
                zIndex: expanded ? imgSrc.length - i : i,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24,
              }}
              className={expanded ? "relative" : "absolute "}
              style={{
                width: imageWidth,
              }}
            >
              <ZoomableImage
                zoomable={expanded}
                className={cn(
                  expanded && "active:scale-95 hover:scale-95",
                  "rounded-md border border-black/25 bg-white shadow-sm overflow-hidden transition-transform duration-200 ease-in-out ",
                )}
                src={`/images/${src}`}
                alt={src}
                width={imageWidth}
                height={lastImageHeight}
                loading={loading}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
