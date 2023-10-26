import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/lib/components/Navbar';

export const metadata: Metadata = {
  title: 'Cintia Siqueira Portfolio',
  description: 'Cintia Siqueira Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="navbar z-10 sticky top-0 bg-black text-white">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
