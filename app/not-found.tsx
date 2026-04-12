"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.back();
    }, 3000);
  }, []);

  return (
    <div className="wrapper">
      <div
        className={`inner min-h-[calc(100dvh-2.1rem)] text-5xl !mx-auto !w-full h-full !p-2 flex flex-col items-center justify-center mb-8`}
      >
        <div className="text-center">
          <h1 className="text-[80px]">404</h1> <br /> 페이지를 찾을 수 없습니다.
          <br />
          <br />
          잠시 후 이전 페이지로 이동합니다.
        </div>
      </div>
    </div>
  );
}

export default NotFound;
