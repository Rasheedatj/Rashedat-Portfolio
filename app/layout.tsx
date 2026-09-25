import type { Metadata, Viewport } from 'next';
import './globals.css';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import LetsTalkSection from '@/components/layout/LetsTalkSection';
import SkipToContent from '@/components/layout/SkipToContent';
import SmoothScroller from '@/components/layout/SmoothScroller';
import JsonLd from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/site';
import { newSpirit, patrickHand, quicksand } from '@/lib/fonts';
import { personSchema } from '@/lib/schema';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s `,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    title: siteConfig.title,
    description: siteConfig.description,
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang='en'
      className={`scroll-pt-10 ${quicksand.variable} ${newSpirit.variable} ${patrickHand.variable}`}
    >
      <body className='bg-background text-foreground font-sans'>
        <JsonLd data={personSchema} />
        <SkipToContent />
        {/* The fixed header stays outside the smoothed content, which is transformed. */}
        <Header />
        <SmoothScroller />
        <div id='smooth-wrapper'>
          {/* The paper lines live here, not on <body>, so they move with the content. */}
          <div
            id='smooth-content'
            className="flex min-h-screen flex-col bg-[url('/paper-lines-tile.png')] bg-size-[100%_9072px] bg-repeat-y bg-top"
          >
            <div aria-hidden='true' className='h-(--header-height) md:mb-10' />
            <main id='main-content' className='flex-1 pb-16 md:pb-27'>
              {children}
            </main>
            <LetsTalkSection />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
