'use client';

import { useRef } from 'react';
import s from './Sections.module.css';
import { useReveal, spotlight } from './useInteractions';
import { profile } from '../../data/resume';

export default function Contact() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="contact" ref={ref} className={`${s.section} ${s.contact}`} aria-labelledby="contact-title">
      <div className={s.container}>
        <h2 id="contact-title" className={`${s.bigTitle} ${s.reveal}`} data-reveal>
          Let&apos;s build something together.
        </h2>
        <p className={`${s.lead} ${s.reveal}`} data-reveal>
          I am open to internships and engineering roles. The fastest way to reach me is email.
        </p>

        <a className={`${s.mail} ${s.reveal}`} data-reveal href={`mailto:${profile.email}`}>
          {profile.email}
        </a>

        <ul className={s.socials}>
          {profile.links.map((l) => {
            const inner = (
              <>
                <span className={s.socialName}>{l.label}</span>
                <span className={s.socialHandle}>{l.handle}</span>
              </>
            );
            return (
              <li key={l.label} className={`${s.card} ${s.reveal}`} data-reveal onPointerMove={spotlight}>
                {l.href ? (
                  <a className={s.social} href={l.href} target="_blank" rel="noreferrer">
                    {inner}
                  </a>
                ) : (
                  <div className={s.social}>{inner}</div>
                )}
              </li>
            );
          })}
        </ul>

        <p className={s.footer}>
          &copy; {new Date().getFullYear()} {profile.firstName} {profile.lastName}. Built with Next.js, Three.js and GSAP.
        </p>
      </div>
    </section>
  );
}
