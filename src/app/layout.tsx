import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "零基礎也能上手！小朱教練 AI 短影音實戰課 | 新手專屬",
  description: "專為新手設計的 AI 短影音實戰課程，從零到一打造高流量短影音帝國。學習 AI 腳本創作、AI 影片剪輯、流量變現密碼，一人也能創造爆款內容。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
