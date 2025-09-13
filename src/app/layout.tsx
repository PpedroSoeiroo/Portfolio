import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Dancing_Script } from 'next/font/google';
import '../styles/globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { placeholderImages } from '@/components/PlaceholderImages';

const inter = Inter({ subsets: ['latin'] });
const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dancing-script'
});

export const metadata: Metadata = {
  title: 'Pedro Soeiro - Full Stack Developer',
  description: 'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building amazing digital experiences.',
  keywords: 'Full Stack Developer, React, Next.js, Node.js, TypeScript, JavaScript, Web Development',
  authors: [{ name: 'Pedro Soeiro' }],
  creator: 'Pedro Soeiro',
  publisher: 'Pedro Soeiro',
  openGraph: {
    type: 'website',
    locale: 'en_US',
        url: 'https://your-portfolio.vercel.app',
    title: 'Pedro Soeiro - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.',
    siteName: 'Pedro Soeiro Portfolio',
    images: [
      {
        url: placeholderImages.ogImage,
        width: 1200,
        height: 630,
        alt: 'Pedro Soeiro - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pedro Soeiro - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.',
    images: [placeholderImages.ogImage],
    creator: '@pedrosoeiro',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${dancingScript.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
