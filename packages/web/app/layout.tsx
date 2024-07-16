import { myMetadata, myViewport } from '@/PWA/index';
import { Inter as FontSans } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';

import { cn } from '@/lib/utils';

import '@artimisjs/ui/style';
import '@/styles/globals.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { Header } from '@/components/sections';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

config.autoAddCss = false; // <-- Fontawesome config.autoAddCss

export const metadata = myMetadata;
export const viewport = myViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
