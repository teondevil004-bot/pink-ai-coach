import "./globals.css";

export const metadata = {
  title: "小朱教練 AI 短影音實戰課",
  description: "零基礎也能上手的 AI 實戰工作坊",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  );
}