'use client';

import { useEffect, useRef } from 'react';

export default function GlowCursor() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const size = 600;
    const glow = glowRef.current;
    if (!glow) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      glow.style.transform = `translate3d(
    ${currentX - size / 2}px,
    ${currentY - size / 2}px,
    0
  )`;

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className='fixed top-0 left-0 w-150 h-150 pointer-none rounded-full blur-3xl z-0 glow-cursor'
    />
  );
}
