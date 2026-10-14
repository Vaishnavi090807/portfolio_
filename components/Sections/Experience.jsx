'use client';

import { useRef } from 'react';
import s from './Sections.module.css';
import { useReveal, spotlight } from './useInteractions';
import { internship } from '../../data/resume';

export default function Experience() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="experience" ref={ref} className={s.section} aria-labelledby="exp-title">
      <div className={s.container}>
        <h2 id="exp-title" className={`${s.title} ${s.reveal}`} data-reveal>
          Experience that shipped.
        </h2>

        <div className={s.expGrid}>
          <div className={`${s.expAside} ${s.reveal}`} data-reveal>
            <h3 className={s.expRole}>{internship.role}</h3>
            <p className={s.expMeta}>
              {internship.company}
              <br />
              {internship.period}, {internship.place}
              <br />
              GitHub: {internship.repo}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={s.cover}
              src={internship.image}
              alt="Illustration of a forecast chart drawn from API data"
              width={800}
              height={500}
              loading="lazy"
            />
          </div>

          <div className={s.points}>
            {internship.points.map((p) => (
              <article key={p.title} className={`${s.card} ${s.reveal}`} data-reveal onPointerMove={spotlight}>
                <div className={s.cardBody}>
                  <h4 className={s.pointTitle}>{p.title}</h4>
                  <p className={s.pointText}>{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
