// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

import type { Metadata } from "next";
import "@/styles/globals.css";
import { fontSans } from "@/styles/fonts";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: process.env.SITE_TITLE,
  description: process.env.SITE_DESCRIPTION,
};

import ThemeProvider from "@/providers/theme-provider";
import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Chang Default Icon */}
        <link rel="icon" href="./logo.ico" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* Don't set defaultTheme="light" */}
        <ThemeProvider attribute="class" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <div className="">{children}</div>
            <ScrollToTop />
          </div>
          {/* <Toaster /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
