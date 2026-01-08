import "./globals.css";
export const metadata = { title: "小朱教練 AI 短影音實戰課", description: "零基礎" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  );
}
