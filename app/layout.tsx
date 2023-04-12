import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const development = true;

  return (
    <html lang="en">
      <head />
      <body className="bg-body font-raleway text-white">
        {development ? (
          <div className="flex justify-center md:p-48 p-6 mx-auto sm:py-12 lg:py-36 lg:flex-row">
            <h1>
              Thank you for your interest! But.... This page is currently under
              development!
            </h1>
            <h1>
              My projects can be viewed on my{' '}
              <Link
                href={'https://github.com/Lowgy'}
                className="font-bold hover:text-red-400"
              >
                GitHub
              </Link>{' '}
              page!
            </h1>
          </div>
        ) : (
          <>
            <Navbar /> {children} <Footer />
          </>
        )}
      </body>
    </html>
  );
}
