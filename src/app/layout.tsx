import type { Metadata } from 'next';

import { ViewTransitions } from 'next-view-transitions';
import { Analytics } from '@vercel/analytics/react';

import { geistSans } from '@/assets/fonts';
import { Toaster } from '@/components/ui/sonner';
import SiteFooter from '@/components/site-footer';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/providers/theme-provider';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Craft Collection',
  description:
    "My stash of cool components I' ve saved from various projects over time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className="scroll-smooth" suppressHydrationWarning>
        <body
          className={cn(
            geistSans.className,
            'color-level-3 flex min-h-screen flex-col antialiased selection:bg-zinc-300 selection:text-zinc-950 dark:selection:bg-zinc-700 dark:selection:text-zinc-50',
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="mx-auto w-full max-w-[692px] px-6 py-16 md:py-32">
              {children}
            </div>
            <SiteFooter />
            <Toaster richColors />
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
