import { Inter as MainFont } from "next/font/google";

import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { mainMetadata } from "@/configs/seo";
import AnimatedBackground from "@/components/AnimatedBackground";

const mainFont = MainFont({
  subsets: ["latin"],
});

export const metadata = mainMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "overflow-x-hidden bg-slate-100 text-slate-950",
          mainFont.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
