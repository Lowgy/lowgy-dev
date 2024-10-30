import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Mousefollow from '@/components/mouse-follow';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Logan Olson',
  description: 'Software Developer - Winnipeg, Manitoba.',
  keywords: [
    'logan olson',
    'logan',
    'olson',
    'software developer',
    'winnipeg',
    'web developer',
    'full stack',
    'frontend',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-[#ff1919] bg-gradient-to-br from-[#14213d] from-35% to-[#e63946] leading-relaxed text-slate-400 selection:bg-[#7a92f0] selection:text-indigo-950 min-h-screen overscroll-none`}
      >
        <div>
          {children}
          <div className="mousefollowmobile md:hidden absolute bottom-0 -right-16"></div>
          <Mousefollow />
        </div>
      </body>
    </html>
  );
}
