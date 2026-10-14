'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Fades and lifts every [data-reveal] element inside `ref` as it enters the viewport. */
export function useReveal(ref) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;
    const targets = gsap.utils.toArray('[data-reveal]', root);

    if (reduced()) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return undefined;
    }

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      ScrollTrigger.batch(targets, {
        start: 'top 88%',
        once: true,
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1.3, ease: 'power3.out', stagger: 0.12, overwrite: true }
          ),
      });
    }, root);

    return () => ctx.revert();
  }, [ref]);
}

/* Soft light that follows the pointer on a card (sets CSS variables, no re-render). */
export function spotlight(e) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
}

/* Gentle 3D tilt for images. */
export function tilt(e) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  el.style.transition = 'transform 0.15s ease-out';
  el.style.transform = `perspective(1000px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) scale(1.015)`;
}

export function untilt(e) {
  const el = e.currentTarget;
  el.style.transition = 'transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1)';
  el.style.transform = '';
}
