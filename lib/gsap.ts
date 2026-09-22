import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Plugins must only be registered in the browser — importing this module on
// the server (e.g. during SSR/RSC rendering) must not touch `window`.
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
