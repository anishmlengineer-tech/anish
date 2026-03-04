import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anish K M - Wuxia Portfolio",
  description: "A cinematic 3D portfolio inspired by Wuxia aesthetics, featuring Next.js and React Three Fiber.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
