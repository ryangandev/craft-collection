import type { Metadata } from 'next';

import { geistSans } from '@/assets/fonts';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/providers/theme-provider';
import '@/app/globals.css';
import SiteFooter from '@/components/site-footer';

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
    <html lang="en">
      <body className={cn(geistSans.className, 'flex min-h-screen flex-col')}>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
