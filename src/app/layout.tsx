import '@/app/globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { constructMetadata } from '@/lib/seo';
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}