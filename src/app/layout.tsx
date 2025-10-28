import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { cookies } from "next/headers"
import { SessionProvider } from "next-auth/react";
import GlobalToaster from "@/components/GlobalToaster";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ActiveThemeProvider } from "@/components/active-theme";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin - Terus Mengajar",
  description: "Admin Terus Mengajar",
  icons: {
    // icon: "/images/favicon.png", // favicon default
    // apple: "/images/apple-touch-icon.png", // optional untuk iOS
    icon: [{ rel: "icon", type: "image/png", url: "/images/favicon.png" }],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const cookieStore = await cookies()
  const activeThemeValue = cookieStore.get("active_theme")?.value
  // const isScaled = activeThemeValue?.endsWith("-scaled")

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={cn(
          "text-foreground group/body theme-blue overscroll-none font-sans antialiased [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)] xl:[--footer-height:calc(var(--spacing)*24)]"
        )}
      >
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            enableColorScheme
          >
            <ActiveThemeProvider initialTheme={activeThemeValue  || "default"}>
              {children}
            </ActiveThemeProvider>
          </ThemeProvider>
          <GlobalToaster />
        </SessionProvider>
      </body>
    </html>
  );
}
