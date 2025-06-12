import '@fontsource-variable/inter/index.css';
import '@fontsource/orbitron/700.css'; // Orbitron Bold
import '@fontsource/orbitron/500.css'; // Orbitron Medium

// Placeholder for Farsi fonts – swap with local import paths or @fontsource when defined
import './fonts/iranyekanx-bold.css';
import './fonts/iranyekanx-medium.css';
import './fonts/vazirmatn-fd-regular.css';
import './fonts/vazirmatn-medium.css';

import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { headers } from 'next/headers';
import { dark } from '@clerk/themes';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dollarbaz Platform',
  description: 'Global fintech services built for speed and scale',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const clerkHeaders = headers();

  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className="font-sans antialiased">
          {children}
          <NotifyMeModal />
        </body>
      </html>
    </ClerkProvider>
  );
}
import { NotifyMeModal } from '@/components/common/NotifyMeModal';
