import '@/app/globals.css';
import { Manrope } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { constructMetadata } from '@/lib/seo';
import { Toaster } from "@/components/ui/sonner";

const manrope = Manrope({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg" className={`${manrope.variable} scroll-smooth`}>
      <body className="font-sans bg-background text-foreground antialiased">
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}