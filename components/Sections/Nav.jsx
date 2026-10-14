'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import s from './Sections.module.css';

const ITEMS = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['credentials', 'Credentials'],
  ['contact', 'Contact'],
];

export default function Nav() {
  const barRef = useRef(null);
  const [shown, setShown] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // setState with an unchanged value does not re-render, so this stays cheap
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ITEMS.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    const bar = gsap.to(barRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: { start: 0, end: 'max', scrub: true },
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
      bar.scrollTrigger?.kill();
      bar.kill();
    };
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.scrollIntoView();
      return;
    }
    gsap.to(window, { duration: 1.6, ease: 'power3.inOut', scrollTo: { y: el, autoKill: true } });
  };

  return (
    <>
      <div ref={barRef} className={s.progress} aria-hidden="true" />
      <nav className={`${s.nav} ${shown ? s.navShown : ''}`} aria-label="Sections">
        {ITEMS.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => go(e, id)}
            className={`${s.navLink} ${active === id ? s.navActive : ''}`}
            tabIndex={shown ? 0 : -1}
          >
            {label}
          </a>
        ))}
      </nav>
    </>
  );
}
