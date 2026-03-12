import type { Metadata } from "next";
import { Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif-sc",
});

export const metadata: Metadata = {
  title: "迈科斯国际教育 - 权威学术版",
  description: "MAX EDUCATION · 全球名校申请官方合作机构",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${notoSerifSC.variable} font-serif antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
