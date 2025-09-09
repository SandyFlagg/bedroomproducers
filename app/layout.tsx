// app/layout.tsx

import './globals.css'; 
import type { Metadata } from 'next';
import { Header } from './header';
import { Footer } from './footer';
import { ThemeProvider } from 'next-themes';
import { BackToTop } from '../components/ui/back-to-top';

export const metadata: Metadata = {
  title: 'Bedroom Producers', 
  description: 'A site for people who make music in their bedrooms.',
  keywords: ['music production', 'bedroom producer', 'music feedback', 'music tools', 'music templates'],
  authors: [{ name: 'Bedroom Producers' }],
  openGraph: {
    title: 'Bedroom Producers',
    description: 'A site for people who make music in their bedrooms.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Header />
          <main className="relative">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
