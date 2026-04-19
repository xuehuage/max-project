import type { Metadata } from "next";
import { Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif-sc",
});

export const metadata: Metadata = {
  title: "成都迈科斯国际教育官网 - 专业留学服务机构",
  description: "成都迈科斯国际教育深耕全球名校申请，致力于为学子提供一站式、定制化的专业留学服务，业务涵盖背景提升、名校规划、文书指导等核心领域。作为迈科斯官方唯一授权门户，我们实时同步官方课程动态与留学资讯，由资深顾问团队为您提供精准、前瞻的海外升学解决方案。",
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
