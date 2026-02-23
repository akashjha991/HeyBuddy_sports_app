import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "Hey Buddy Sports",
  description: "Find nearby sports games and join instantly."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container content-space">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
