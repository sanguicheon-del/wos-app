ximport type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "Bylo Coffee",
  description: "Bylo Coffee — Premium Take Away Experience",

  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },

  appleWebApp: {
    capable: true,
    title: "Bylo Coffee",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
