import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Interview Cheatsheet",
  description: "Шпаргалка для технических собеседований",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
