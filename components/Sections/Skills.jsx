'use client';

import { useRef } from 'react';
import s from './Sections.module.css';
import { useReveal, spotlight } from './useInteractions';
import { skillGroups } from '../../data/resume';

const all = [...new Set(skillGroups.flatMap((g) => g.skills))];
const half = Math.ceil(all.length / 2);
const rows = [all.slice(0, half), all.slice(half)];

function Marquee({ items, reverse, accentEvery }) {
  // the list is rendered twice so the loop never shows a gap
  const doubled = [...items, ...items];
  return (
    <div className={`${s.track} ${reverse ? s.trackReverse : ''}`}>
      {doubled.map((name, i) => (
        <span
          key={`${name}-${i}`}
          className={`${s.pill} ${i % accentEvery === 0 ? s.pillAccent : ''}`}
          aria-hidden={i >= items.length ? 'true' : undefined}
        >
          {name}
        </span>
      ))}
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="skills" ref={ref} className={s.section} aria-labelledby="skills-title">
      <div className={s.container}>
        <h2 id="skills-title" className={`${s.title} ${s.reveal}`} data-reveal>
          Technical skills across the stack.
        </h2>
        <p className={`${s.lead} ${s.reveal}`} data-reveal>
          From low-level sockets and algorithms to REST backends, databases, cloud and local AI pipelines.
        </p>
      </div>

      <div className={`${s.marquees} ${s.reveal}`} data-reveal>
        <Marquee items={rows[0]} accentEvery={4} />
        <Marquee items={rows[1]} reverse accentEvery={5} />
      </div>

      <div className={s.container}>
        <div className={s.skillGrid}>
          {skillGroups.map((g) => (
            <article key={g.title} className={`${s.card} ${s.reveal}`} data-reveal onPointerMove={spotlight}>
              <div className={s.cardBody}>
                <h3 className={s.cardTitle}>{g.title}</h3>
                <ul className={s.chips}>
                  {g.skills.map((skill) => (
                    <li key={skill} className={s.chip}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
