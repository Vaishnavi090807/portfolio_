'use client';

import { useRef } from 'react';
import s from './Sections.module.css';
import { useReveal, spotlight } from './useInteractions';
import { education, upskilling, publications, leadership } from '../../data/resume';

export default function Credentials() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="credentials" ref={ref} className={s.section} aria-labelledby="cred-title">
      <div className={s.container}>
        <h2 id="cred-title" className={`${s.title} ${s.reveal}`} data-reveal>
          Education, research and leadership.
        </h2>

        <div className={s.credGrid}>
          <article className={`${s.card} ${s.wide} ${s.reveal}`} data-reveal onPointerMove={spotlight}>
            <div className={s.cardBody}>
              <h3 className={s.credTitle}>{education.degree}</h3>
              <p className={s.credMeta}>
                {education.school}. GPA {education.gpa}. Graduating {education.graduating}.
              </p>
              <ul className={s.chips}>
                {education.coursework.map((c) => (
                  <li key={c.name} className={s.chip}>
                    {c.name}
                    {c.grade && <span className={s.grade}>{c.grade}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className={`${s.card} ${s.reveal}`} data-reveal onPointerMove={spotlight}>
            <div className={s.cardBody}>
              <h3 className={s.credTitle}>Upskilling</h3>
              <p className={s.credMeta}>Job simulations, assessments and courses.</p>
              <ul className={s.list}>
                {upskilling.map((u) => (
                  <li key={u.name + u.org}>
                    <span>
                      {u.name}
                      <span className={s.listSub}>{u.org}</span>
                    </span>
                    <span className={s.listDate}>{u.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className={`${s.card} ${s.reveal}`} data-reveal onPointerMove={spotlight}>
            <div className={s.cardBody}>
              <h3 className={s.credTitle}>Leadership</h3>
              <p className={s.credMeta}>Teamwork, communication and accountability.</p>
              <ul className={s.list}>
                {leadership.map((l) => (
                  <li key={l.role}>
                    <span>
                      {l.role}
                      <span className={s.listSub}>{l.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {publications.map((p) => (
            <article key={p.title} className={`${s.card} ${s.reveal}`} data-reveal onPointerMove={spotlight}>
              <div className={s.cardBody}>
                <span className={s.badge}>{p.status}</span>
                <h3 className={s.credTitle}>{p.title}</h3>
                <p className={s.credMeta}>{p.venue}</p>
                <p className={s.credMeta}>{p.authors}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
