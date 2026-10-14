'use client';

import { useEffect, useRef, useState } from 'react';
import s from './Sections.module.css';
import Counter from './Counter';
import { useReveal, spotlight, tilt, untilt } from './useInteractions';
import { about } from '../../data/resume';

export default function About() {
  const ref = useRef(null);
  // Shows the illustration, and switches to your own photo if public/images/profile.jpg exists.
  const [photo, setPhoto] = useState('/images/profile.svg');
  useReveal(ref);

  useEffect(() => {
    const probe = new window.Image();
    probe.onload = () => setPhoto('/images/profile.jpg');
    probe.src = '/images/profile.jpg';
    return () => {
      probe.onload = null;
    };
  }, []);

  return (
    <section id="about" ref={ref} className={s.section} aria-labelledby="about-title">
      <div className={`${s.container} ${s.aboutGrid}`}>
        <div className={`${s.portraitWrap} ${s.reveal}`} data-reveal onPointerMove={tilt} onPointerLeave={untilt}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={s.portrait}
            src={photo}
            alt="Portrait of Vaishnavi Sabbella"
            width={640}
            height={800}
          />
        </div>

        <div className={s.aboutText}>
          <h2 id="about-title" className={`${s.title} ${s.reveal}`} data-reveal>
            {about.title}
          </h2>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className={s.reveal} data-reveal>
              {p}
            </p>
          ))}

          <div className={s.stats}>
            {about.stats.map((st) => (
              <div key={st.label} className={`${s.card} ${s.reveal}`} data-reveal onPointerMove={spotlight}>
                <div className={s.cardBody}>
                  <strong className={s.statValue}>
                    <Counter value={st.value} decimals={st.decimals} suffix={st.suffix} />
                  </strong>
                  <span className={s.statLabel}>{st.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
