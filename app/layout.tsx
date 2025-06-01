// app/layout.tsx

// Make sure this path is correct for your project structure.
// If globals.css is in the 'app' folder: import './globals.css';
// If globals.css is in a 'styles' folder at the root: import '../styles/globals.css';
import './globals.css'; 

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bedroom Producers', // Your site title
  description: 'A site for people who make music in their bedrooms.', // Your site description
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Next.js automatically handles the <head> content, including metadata.
          You can create an app/head.tsx file for more direct control if needed. */}
      <body>
        {/* children will be the content of your app/page.tsx and other route segments */}
        {children}
      </body>
    </html>
  );
}
