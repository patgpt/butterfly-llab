
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";
import { fontMono, fontSans } from "@/app/fonts";



export const metadata: Metadata = {
  title: "Butterfly Design - Starter",
  description: "Butterfly Design - Starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(fontSans.variable, fontMono.variable, "antialiased")}
      >
        {children}
      </body>
    </html>
  );
}
