'use client';

import { useRef } from 'react';
import s from './Sections.module.css';
import { useReveal, tilt, untilt } from './useInteractions';
import { projects, profile } from '../../data/resume';

const github = profile.links.find((l) => l.label === 'GitHub');

const Arrow = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export default function Projects() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="projects" ref={ref} className={s.section} aria-labelledby="projects-title">
      <div className={s.container}>
        <h2 id="projects-title" className={`${s.title} ${s.reveal}`} data-reveal>
          Projects built from the ground up.
        </h2>
        <p className={`${s.lead} ${s.reveal}`} data-reveal>
          Concurrency, graph algorithms, retrieval-augmented generation and a full-stack booking platform.
        </p>

        {projects.map((p, i) => (
          <article key={p.title} className={`${s.project} ${i % 2 ? s.flip : ''}`}>
            <div className={`${s.coverWrap} ${s.reveal}`} data-reveal onPointerMove={tilt} onPointerLeave={untilt}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={s.coverImg} src={p.image} alt={p.alt} width={800} height={500} loading="lazy" />
              <span className={`${s.status} ${p.status === 'In progress' ? s.statusLive : ''}`}>{p.status}</span>
            </div>

            <div>
              <h3 className={`${s.projectTitle} ${s.reveal}`} data-reveal>
                {p.title}
              </h3>
              <p className={`${s.period} ${s.reveal}`} data-reveal>
                {p.period}
              </p>
              <ul className={`${s.bullets} ${s.reveal}`} data-reveal>
                {p.points.map((pt) => (
                  <li key={pt.slice(0, 30)}>{pt}</li>
                ))}
              </ul>
              <ul className={`${s.chips} ${s.reveal}`} data-reveal>
                {p.tags.map((t) => (
                  <li key={t} className={s.chip}>
                    {t}
                  </li>
                ))}
              </ul>
              {github && (
                <a className={`${s.link} ${s.reveal}`} data-reveal href={github.href} target="_blank" rel="noreferrer">
                  View on GitHub <Arrow />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
