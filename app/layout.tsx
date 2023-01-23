import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-body font-raleway text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
