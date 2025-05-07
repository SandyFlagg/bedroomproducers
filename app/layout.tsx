import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans' // Updated Geist import
import { GeistMono } from 'geist/font/mono' // Updated Geist import
import './globals.css'
import { Header } from './header' // Assuming these components exist
import { Footer } from './footer' // Assuming these components exist
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff', // Consider adding a dark theme color too if needed
  // themeColor: [
  //   { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  //   { media: '(prefers-color-scheme: dark)', color: '#000000' }, // Example dark theme color
  // ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://bedroomproducers.com.au'), // Good practice to set base URL
  title: {
    default: 'Bedroom Producers',
    template: '%s | Bedroom Producers', // Allows pages to add their own title part
  },
  description:
    'A gritty, no-BS home for underdog producers. Built in bedrooms. Played in clubs.',
  // Add Open Graph and Twitter card metadata for better sharing
  openGraph: {
    title: 'Bedroom Producers',
    description: 'A gritty, no-BS home for underdog producers. Built in bedrooms. Played in clubs.',
    url: 'https://bedroomproducers.com.au',
    siteName: 'Bedroom Producers',
    // images: [ // Add a preview image URL here
    //   {
    //     url: '/og-image.png', // Example path, create this image
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bedroom Producers',
    description: 'A gritty, no-BS home for underdog producers. Built in bedrooms. Played in clubs.',
    // images: ['/og-image.png'], // Use the same image
  },
  // Add icons
  // icons: {
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon-16x16.png',
  //   apple: '/apple-touch-icon.png',
  // },
}

// Note: Using GeistSans and GeistMono directly is often simpler now
// const geist = Geist({ ... }) // Old way
// const geistMono = Geist_Mono({ ... }) // Old way

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body
        className={`
          bg-gradient-to-br from-white to-zinc-100 dark:from-zinc-950 dark:to-black
          text-black dark:text-white
          tracking-tight antialiased font-sans  /* Use sans font by default */
        `}
      >
        <ThemeProvider
          attribute="class" // Use class-based theme switching
          defaultTheme="system" // Default to system preference
          enableSystem // Allow system preference
          disableTransitionOnChange // Prevent transition flashes on theme change
        >
          {/* Main layout container */}
          <div className="flex min-h-screen w-full flex-col">

            {/* Content Wrapper - Wider with responsive padding */}
            {/* This is the DIV where the main changes were applied */}
            <div className="relative mx-auto w-full flex-1
                           max-w-[1400px] /* Increased max width */
                           px-6 md:px-12 lg:px-24 /* Responsive padding */
                           pt-20 /* Keep original top padding */
                           bg-white dark:bg-zinc-900 /* Content area background */
                           shadow-sm /* Optional: subtle shadow for content area */
                          ">
              {/* Removed incorrect font class: font-[family-name:var(--font-inter-tight)] */}
              {/* Header, Children (Page Content), and Footer go inside the padded/constrained area */}
              <Header />
              <main className="py-8 md:py-12"> {/* Add some padding around main content */}
                {children}
              </main>
              <Footer />
            </div>

          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}