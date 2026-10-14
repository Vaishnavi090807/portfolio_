'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Counter({ value, decimals = 0, suffix = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const format = (n) => n.toFixed(decimals);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = format(value);
      return undefined;
    }

    gsap.registerPlugin(ScrollTrigger);
    const state = { n: 0 };
    el.textContent = format(0);
    const tween = gsap.to(state, {
      n: value,
      duration: 2.4,
      ease: 'power3.out',
      paused: true,
      onUpdate: () => {
        el.textContent = format(state.n);
      },
    });
    const st = ScrollTrigger.create({ trigger: el, start: 'top 92%', once: true, onEnter: () => tween.play() });

    return () => {
      st.kill();
      tween.kill();
    };
  }, [value, decimals]);

  return (
    <span>
      <span ref={ref}>{value.toFixed(decimals)}</span>
      {suffix}
    </span>
  );
}
