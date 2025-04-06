import '@fontsource-variable/inter/index.css';
// import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });
//
// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: 'Dollarbaz Platform',
  description: 'Global fintech services built for speed and scale',
};

export default function RootLayout({
  // children,
}: {
  children: React.ReactNode;
}) {
  return /*(
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );*/
}
