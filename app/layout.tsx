import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "정성우 프론트엔드 포트폴리오",
  description: "흐름을 만드는 프론트엔드 개발자, 정성우입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
