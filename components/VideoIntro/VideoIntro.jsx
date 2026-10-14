'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import styles from './VideoIntro.module.css';

// Three.js is code-split and never rendered on the server.
const CinematicLayer = dynamic(() => import('../CinematicLayer/CinematicLayer'), { ssr: false });

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- icons ---------- */
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M8 5.6v12.8a1 1 0 0 0 1.52.85l10.4-6.4a1 1 0 0 0 0-1.7L9.52 4.75A1 1 0 0 0 8 5.6Z" />
  </svg>
);
const PauseIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <rect x="6" y="5" width="4.2" height="14" rx="1.2" />
    <rect x="13.8" y="5" width="4.2" height="14" rx="1.2" />
  </svg>
);
const VolumeOnIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 9.5v5h3.6L12 18.5v-13L7.6 9.5H4Z" fill="currentColor" stroke="none" />
    <path d="M15.5 9a4.2 4.2 0 0 1 0 6" />
    <path d="M18 6.5a7.6 7.6 0 0 1 0 11" />
  </svg>
);
const VolumeOffIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 9.5v5h3.6L12 18.5v-13L7.6 9.5H4Z" fill="currentColor" stroke="none" />
    <path d="M16 9.5l5 5" />
    <path d="M21 9.5l-5 5" />
  </svg>
);

export default function VideoIntro({
  src = '/video/intro.mp4',
  poster,
  firstName = 'Alex',
  lastName = 'Rivera',
  tagline = 'Creative developer, open for select work',
  role = 'Front-end engineer and interaction designer',
  description = 'I build immersive, performance-minded websites where motion, sound and story work together.',
  nextSectionId = 'work',
}) {
  const wrapperRef = useRef(null);
  const heroRef = useRef(null);
  const fgRef = useRef(null);
  const bgRef = useRef(null);
  const hintRef = useRef(null);
  const userPaused = useRef(false);

  // Only these three change at human speed, so re-renders stay negligible.
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [hintVisible, setHintVisible] = useState(true);

  /* ---------- sound hint ---------- */
  const hideHint = useCallback(() => {
    const el = hintRef.current;
    if (!el) return;
    gsap.to(el, {
      opacity: 0,
      y: 8,
      duration: 0.9,
      ease: 'power2.inOut',
      overwrite: true,
      onComplete: () => setHintVisible(false),
    });
  }, []);

  /* ---------- video wiring ---------- */
  useEffect(() => {
    const fg = fgRef.current;
    const bg = bgRef.current;
    const hero = heroRef.current;
    if (!fg || !hero) return undefined;

    fg.muted = true;
    if (bg) bg.muted = true;

    const playBoth = () => {
      fg.play().catch(() => setPlaying(false)); // e.g. iOS low-power mode
      bg?.play().catch(() => {});
    };

    const onPlay = () => {
      setPlaying(true);
      bg?.play().catch(() => {});
    };
    const onPause = () => {
      setPlaying(false);
      bg?.pause();
    };
    // keep the blurred duplicate roughly in step with the foreground
    const onTime = () => {
      if (bg && Math.abs(bg.currentTime - fg.currentTime) > 0.3) {
        bg.currentTime = fg.currentTime;
      }
    };

    fg.addEventListener('play', onPlay);
    fg.addEventListener('pause', onPause);
    fg.addEventListener('timeupdate', onTime);

    // do not decode two videos while the hero is off screen
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!userPaused.current) playBoth();
        } else {
          fg.pause();
          bg?.pause();
        }
      },
      { threshold: 0.05 }
    );
    io.observe(hero);

    playBoth();

    return () => {
      io.disconnect();
      fg.removeEventListener('play', onPlay);
      fg.removeEventListener('pause', onPause);
      fg.removeEventListener('timeupdate', onTime);
    };
  }, []);

  /* ---------- GSAP: entrance + scroll scrub ---------- */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const fg = fgRef.current;
    const reduce = prefersReducedMotion();
    let hintCall;

    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set('[data-anim="veil"]', { display: 'none' });
        gsap.set('[data-anim]:not([data-anim="veil"]):not([data-anim="dim"]):not([data-anim="intro"]):not([data-anim="media"]):not([data-anim="content"]):not([data-anim="scrollWrap"])', {
          opacity: 1,
          yPercent: 0,
          y: 0,
        });
        hintCall = gsap.delayedCall(6, hideHint);
        return;
      }

      const tl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '[data-anim="veil"]',
        { opacity: 1 },
        {
          opacity: 0,
          duration: 2.4,
          ease: 'power2.inOut',
          onComplete: () => gsap.set('[data-anim="veil"]', { display: 'none' }),
        },
        0
      )
        .fromTo('[data-anim="intro"]', { scale: 1.12 }, { scale: 1, duration: 3.8, ease: 'power2.out' }, 0)
        .fromTo('[data-anim="tagline"]', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 1.4 }, 1.0)
        .fromTo(
          '[data-anim="line"]',
          { yPercent: 118, opacity: 1 },
          { yPercent: 0, duration: 1.7, stagger: 0.16, ease: 'power4.out' },
          1.15
        )
        .fromTo('[data-anim="role"]', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 1.4 }, 2.1)
        .fromTo('[data-anim="desc"]', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 1.4 }, 2.3)
        .fromTo('[data-anim="controls"]', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 1.2, stagger: 0.1 }, 2.6)
        .fromTo('[data-anim="scroll"]', { opacity: 0 }, { opacity: 1, duration: 1.6, ease: 'power2.out' }, 2.9)
        .fromTo('[data-anim="hint"]', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 1.2 }, 3.3)
        .call(() => {
          hintCall = gsap.delayedCall(6.5, hideHint);
        });

      // start once the first frame can be shown (with a safety timeout)
      let started = false;
      const start = () => {
        if (started) return;
        started = true;
        tl.play();
      };
      if (fg && fg.readyState >= 2) {
        gsap.delayedCall(0.15, start);
      } else {
        fg?.addEventListener('loadeddata', start, { once: true });
        gsap.delayedCall(3, start);
      }

      // scroll: the hero stays pinned (CSS sticky) while it dims and the copy drifts away
      gsap
        .timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.8,
          },
        })
        .to('[data-anim="content"]', { yPercent: -14, opacity: 0, ease: 'none', duration: 0.6 }, 0)
        .to('[data-anim="scrollWrap"]', { opacity: 0, ease: 'none', duration: 0.2 }, 0)
        .to('[data-anim="media"]', { scale: 1.1, ease: 'none', duration: 1 }, 0)
        .to('[data-anim="dim"]', { opacity: 0.85, ease: 'none', duration: 1 }, 0);
    }, wrapperRef);

    return () => {
      hintCall?.kill();
      ctx.revert();
    };
  }, [hideHint]);

  /* ---------- controls ---------- */
  const togglePlay = useCallback(() => {
    const fg = fgRef.current;
    if (!fg) return;
    if (fg.paused) {
      userPaused.current = false;
      fg.play().catch(() => {});
    } else {
      userPaused.current = true;
      fg.pause();
    }
  }, []);

  const toggleMute = useCallback(() => {
    const fg = fgRef.current;
    if (!fg) return;
    fg.muted = !fg.muted;
    setMuted(fg.muted);
    if (!fg.muted) {
      hideHint();
      if (fg.paused && !userPaused.current) fg.play().catch(() => {});
    }
  }, [hideHint]);

  const scrollToNext = useCallback(() => {
    const el = document.getElementById(nextSectionId);
    if (!el) return;
    if (prefersReducedMotion()) {
      el.scrollIntoView();
      return;
    }
    gsap.to(window, {
      duration: 1.8,
      ease: 'power3.inOut',
      scrollTo: { y: el, autoKill: true },
    });
  }, [nextSectionId]);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <section ref={heroRef} className={styles.hero} aria-label={`${firstName} ${lastName} introduction`}>
        {/* ambient + foreground video */}
        <div className={styles.media} data-anim="media">
          <div className={styles.intro} data-anim="intro">
            <video
              ref={bgRef}
              className={styles.bgVideo}
              src={src}
              poster={poster}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
              tabIndex={-1}
              disablePictureInPicture
              disableRemotePlayback
            />
            <video
              ref={fgRef}
              className={styles.fgVideo}
              src={src}
              poster={poster}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              disableRemotePlayback
            />
          </div>
        </div>

        <CinematicLayer />

        <div className={styles.grade} aria-hidden="true" />
        <div className={styles.dim} data-anim="dim" aria-hidden="true" />

        {/* copy */}
        <div className={styles.content} data-anim="content">
          <p className={styles.tagline} data-anim="tagline">{tagline}</p>
          <h1 className={styles.name}>
            <span className={styles.line}>
              <span className={styles.lineInner} data-anim="line">{firstName}</span>
            </span>
            <span className={styles.line}>
              <span className={styles.lineInner} data-anim="line">{lastName}</span>
            </span>
          </h1>
          <p className={styles.role} data-anim="role">{role}</p>
          <p className={styles.desc} data-anim="desc">{description}</p>
        </div>

        {/* glass controls */}
        <div className={styles.controls}>
          {hintVisible && (
            <button
              ref={hintRef}
              type="button"
              className={styles.hint}
              data-anim="hint"
              onClick={toggleMute}
              aria-label="Turn sound on"
            >
              <span className={styles.bars} aria-hidden="true">
                <i /><i /><i />
              </span>
              Tap for sound
            </button>
          )}
          <div className={styles.buttons}>
            <button
              type="button"
              className={styles.glass}
              data-anim="controls"
              onClick={togglePlay}
              aria-label={playing ? 'Pause video' : 'Play video'}
              aria-pressed={!playing}
            >
              {playing ? <PauseIcon /> : <PlayIcon />}
            </button>
            <button
              type="button"
              className={styles.glass}
              data-anim="controls"
              onClick={toggleMute}
              aria-label={muted ? 'Unmute video' : 'Mute video'}
              aria-pressed={!muted}
            >
              {muted ? <VolumeOffIcon /> : <VolumeOnIcon />}
            </button>
          </div>
        </div>

        {/* scroll indicator */}
        <div className={styles.scrollWrap} data-anim="scrollWrap">
          <button
            type="button"
            className={styles.scroll}
            data-anim="scroll"
            onClick={scrollToNext}
            aria-label="Scroll to next section"
          >
            <span className={styles.scrollLabel}>Scroll</span>
            <span className={styles.scrollTrack} aria-hidden="true">
              <span className={styles.scrollPulse} />
            </span>
          </button>
        </div>

        <div className={styles.veil} data-anim="veil" aria-hidden="true" />
      </section>
    </div>
  );
}
