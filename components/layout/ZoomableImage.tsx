"use client";

// ---- REACT
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

// ---- NEXT
import dynamic from "next/dynamic";
import Image, { StaticImageData } from "next/image";

// ---- COMPONENT
//  모달용 컴포넌트만 framer-motion과 함께 동적 로드
// import SmartImage, { SmartImageProps } from "./SmartImage";
const MotionOverlay = dynamic(
  () => import("./MotionOverlay").then((m) => m.MotionOverlay),
  { ssr: false },
);

type ZoomableImageProps = {
  zoomable?: boolean;
  className?: string;
  src: string | StaticImageData;
  alt?: string;
  width?: number;
  height?: number;
  loading?: "eager" | "lazy";
  onError?: () => void;
};

export function ZoomableImage({
  zoomable = true,
  className,
  src,
  alt,
  width,
  height,
  onError,
  loading = "lazy",
  ...rest
}: ZoomableImageProps) {
  // const [hasError, setHasError] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mounted, setMounted] = useState(false);

  const stringSrc = useMemo(
    () => (typeof src === "string" ? src : ((src as any)?.src ?? "")),
    [src],
  );

  useEffect(() => setMounted(true), []);

  // if (hasError) {
  //   return (
  //     <Skeleton
  //       className={`w-full h-full rounded-none bg-[#333] ${className ?? ""}`}
  //     />
  //   );
  // }

  return (
    <>
      <Image
        src={src}
        alt={alt ?? ""}
        width={width}
        height={height}
        loading={loading}
        onClick={() => zoomable && setIsZoomed(true)}
        // onError={(e) => {
        //   setHasError(true);
        //   onError?.(e);
        // }}
        className={`${zoomable ? "cursor-zoom-in" : ""} ${className ?? ""} `}
        {...rest}
      />

      {mounted &&
        isZoomed &&
        createPortal(
          <MotionOverlay // 모달을 여는 순간 framer-motion 로드
            src={stringSrc}
            alt={alt ?? ""}
            onClose={() => setIsZoomed(false)}
          />,
          document.body,
        )}
    </>
  );
}
