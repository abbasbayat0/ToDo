import type { Metadata } from "next";
import "./globals.css";
import "@/public/css/all.css";
import { Providers } from "@/lib/redux/provider";

export const metadata: Metadata = {
  title: "To Do List",
  description: "Create A To Do List",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full">
      <body className="h-full overflow-hidden bg-[#D1D5DB]">
        {/* Redux Provider */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
