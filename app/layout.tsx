import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Rashedat Jinadu Portfolio',
  description: 'A frontend web and mobile application developer',
};

const roboto = Poppins({
  weight: ['200', '400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`scroll-smooth scroll-pt-10 ${roboto.variable}`}>
      <body className='flex flex-col md:flex-row justify-between md:max-w-11/12  lg:max-w-4/5 mx-auto font-sans  scroll-smooth scroll-pt-10'>
        {children}
      </body>
    </html>
  );
}
