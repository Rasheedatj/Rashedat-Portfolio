import { Patrick_Hand, Quicksand } from 'next/font/google';
import localFont from 'next/font/local';

/** Variable font: every weight from 300 to 700 is available without listing them. */
export const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand',
});

/** Static cuts at 300-600, 700 and 900; other weights resolve to the nearest cut. */
export const newSpirit = localFont({
  src: [
    { path: '../app/fonts/new-spirit/NewSpirit-Light.woff2', weight: '300', style: 'normal' },
    { path: '../app/fonts/new-spirit/NewSpirit-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../app/fonts/new-spirit/NewSpirit-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../app/fonts/new-spirit/NewSpirit-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../app/fonts/new-spirit/NewSpirit-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../app/fonts/new-spirit/NewSpirit-Heavy.woff2', weight: '900', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-new-spirit',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
});

/** Handwritten labels and annotations. */
export const patrickHand = Patrick_Hand({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-patrick-hand',
});
