'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import LetsConnectNote from '@/components/layout/LetsConnectNote';
import Logo from '@/components/layout/Logo';
import SocialLinks from '@/components/layout/SocialLinks';
import { navItems } from '@/data/site';
import { ScrollSmoother } from '@/lib/gsap';
import { isNavItemActive } from '@/lib/nav';

const socialIconColor = '#FCB929';
const creamColor = '#FDFEBA';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  const close = () => setOpen(false);

  // Lock page scroll while the menu is open.
  useEffect(() => {
    if (!open) return;
    const { body, documentElement: html } = document;
    const previous = { body: body.style.overflow, html: html.style.overflow };
    body.style.overflow = 'hidden';
    html.style.overflow = 'hidden';
    // ScrollSmoother drives scrolling itself, so it has to be paused too.
    const smoother = ScrollSmoother.get();
    smoother?.paused(true);
    return () => {
      body.style.overflow = previous.body;
      html.style.overflow = previous.html;
      smoother?.paused(false);
    };
  }, [open]);

  // Move focus into the menu on open and back to the toggle on close.
  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      const frame = requestAnimationFrame(() =>
        closeRef.current?.focus({ preventScroll: true }),
      );
      return () => cancelAnimationFrame(frame);
    }
    if (wasOpen.current) {
      wasOpen.current = false;
      toggleRef.current?.focus({ preventScroll: true });
    }
  }, [open]);

  // Escape closes the menu and Tab stays inside it.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (event.key !== 'Tab' || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  // The menu is mobile only, so drop it (and the scroll lock) on wider screens.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 768px)');
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return (
    <div className='md:hidden'>
      <button
        ref={toggleRef}
        type='button'
        aria-label='Open menu'
        aria-expanded={open}
        aria-controls='mobile-menu'
        onClick={() => setOpen(true)}
        className='p-2'
      >
        <Image
          src='/hamburger-menu.svg'
          alt=''
          width={52}
          height={17}
          aria-hidden='true'
          className='h-4 w-auto'
        />
      </button>

      <div
        ref={panelRef}
        id='mobile-menu'
        role='dialog'
        aria-modal='true'
        aria-label='Site menu'
        inert={!open}
        className={`fixed inset-0 z-50 flex h-dvh flex-col bg-[#491413] duration-300 ease-out motion-reduce:transition-none ${
          open
            ? 'visible translate-x-0 transition-[translate]'
            : 'invisible translate-x-full transition-[translate,visibility]'
        }`}
      >
        <div className='flex items-start justify-between px-5 pt-5'>
          <Logo
            compact
            backgroundColor={creamColor}
            textClassName='text-maroon'
            onClick={close}
          />
          <button
            ref={closeRef}
            type='button'
            aria-label='Close menu'
            onClick={close}
            className='mt-1 -mr-0.5'
          >
            <Image
              src='/close.svg'
              alt=''
              width={41}
              height={38}
              aria-hidden='true'
              className='h-9.5 w-auto'
            />
          </button>
        </div>

        <nav aria-label='Mobile' className='my-auto'>
          <ul className='flex flex-col items-center gap-8'>
            {navItems.map((item) => {
              const active = isNavItemActive(pathname, item);

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={active ? 'page' : undefined}
                    className='flex flex-col items-center font-display text-3xl leading-12 font-bold text-lemon'
                  >
                    {item.label}
                    {active && (
                      <Image
                        src='/double-yellow-stroke.svg'
                        alt=''
                        width={63}
                        height={10}
                        aria-hidden='true'
                        className='mt-1 h-auto w-27.75 max-w-none'
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className='mt-auto flex justify-end px-5 pb-6'>
          <div className='relative'>
            <LetsConnectNote
              color={creamColor}
              className='absolute -top-24 -left-19'
            />
            <SocialLinks color={socialIconColor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
