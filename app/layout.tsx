import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FlowPOS ? Modern POS for Ambitious Retailers',
  description: 'Sell everywhere, accept payments instantly, and reconcile effortlessly. FlowPOS is the fastest way to run in?store checkouts and manage retail revenue.',
  metadataBase: new URL('https://agentic-f87fb918.vercel.app'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
