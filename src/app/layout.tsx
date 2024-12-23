import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
// import ModeToggle from "@/components/Toggle";
import {Roboto} from "next/font/google" 

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className} suppressHydrationWarning>
      <head />
      <body >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute justify-start items-center w-full h-full">
            <Navbar />
          </div>

          {/* <div className="absolute top-4 right-4 z-30">
            <ModeToggle />
          </div> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
