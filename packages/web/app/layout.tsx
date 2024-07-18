import { myMetadata, myViewport } from '@/PWA/index';
import { Space_Grotesk as FontSans } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';

import { cn } from '@/lib/utils';

import '@artimisjs/ui/style';
import '@/styles/globals.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

import BottomBar from '@/components/sections/BottomBar/BottomBar';

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
          'min-h-screen max-w-[100vw] relative overflow-x-hidden font-sans antialiased md:w-[40vw]',
          fontSans.variable
        )}
      >
        {children}
        <BottomBar />
      </body>
    </html>
  );
}
