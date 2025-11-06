import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import anime from 'animejs';

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  // Safari parallax layer refs
  const sunRef = useRef(null);
  const mountainsRef = useRef(null);
  const treesRef = useRef(null);
  const birdsRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Text entrance
    anime
      .timeline({ easing: 'easeOutExpo' })
      .add({ targets: titleRef.current, translateY: [30, 0], opacity: [0, 1], duration: 700 })
      .add({ targets: subtitleRef.current, translateY: [30, 0], opacity: [0, 1], duration: 600 }, '-=350')
      .add({ targets: ctaRef.current, opacity: [0, 1], translateY: [12, 0], duration: 500 }, '-=250');

    // Flock of birds looping across the sky
    const birds = birdsRef.current?.querySelectorAll('.bird');
    if (birds && birds.length) {
      birds.forEach((b, i) => {
        anime({
          targets: b,
          translateX: ['-10%', '110%'],
          translateY: [0, i % 2 === 0 ? -10 : 10],
          easing: 'linear',
          duration: 14000 + i * 1500,
          delay: i * 1200,
          loop: true,
        });
        // Wing flap using scaleY
        anime({
          targets: b.querySelectorAll('.wing'),
          scaleY: [1, 0.8, 1],
          transformOrigin: 'center',
          easing: 'easeInOutSine',
          duration: 900,
          delay: i * 100,
          loop: true,
        });
      });
    }

    // Slow atmospheric shimmer on the sun
    if (sunRef.current) {
      anime({
        targets: sunRef.current,
        scale: [1, 1.03, 1],
        easing: 'easeInOutSine',
        duration: 4000,
        loop: true,
      });
    }

    // Parallax based on mouse position
    const onMove = (e) => {
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const toPx = (val) => `${val.toFixed(2)}px`;

      if (sunRef.current) {
        sunRef.current.style.transform = `translate(${toPx(x * -12)}, ${toPx(y * -14)}) scale(1)`;
      }
      if (mountainsRef.current) {
        mountainsRef.current.style.transform = `translate(${toPx(x * -20)}, ${toPx(y * -10)})`;
      }
      if (treesRef.current) {
        treesRef.current.style.transform = `translate(${toPx(x * -35)}, ${toPx(y * -18)})`;
      }
      if (birdsRef.current) {
        birdsRef.current.style.transform = `translate(${toPx(x * -8)}, ${toPx(y * -6)})`;
      }
    };

    const sec = sectionRef.current;
    sec?.addEventListener('mousemove', onMove);
    return () => sec?.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      {/* 3D Spline background - keep full size and interactive */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Overlays must not block interaction with the scene */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle vignette and horizon glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.25)_60%,rgba(0,0,0,0.65)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

          {/* Safari layers */}
          {/* Sun */}
          <div ref={sunRef} className="absolute right-10 top-16 w-40 h-40 rounded-full bg-gradient-to-br from-amber-300 via-orange-300 to-rose-300 blur-[2px] opacity-90" />

          {/* Distant mountains silhouette */}
          <svg ref={mountainsRef} className="absolute bottom-28 left-0 right-0 w-[140%] h-40 mx-[-20%] opacity-70" viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path d="M0 160 L120 120 L230 150 L360 90 L520 150 L640 110 L780 150 L920 100 L1060 150 L1200 120 L1320 150 L1440 120 L1440 200 L0 200 Z" fill="rgba(50,50,60,0.6)" />
          </svg>

          {/* Acacia trees + savanna line */}
          <svg ref={treesRef} className="absolute bottom-16 left-0 right-0 w-[140%] h-32 mx-[-20%]" viewBox="0 0 1440 160" preserveAspectRatio="none">
            <rect x="0" y="120" width="1440" height="40" fill="rgba(20,20,25,0.9)" />
            {/* Trees (simple silhouettes) */}
            <g fill="rgba(30,30,35,0.95)">
              {/* Tree 1 */}
              <path d="M120 110 h12 v20 h-12z" />
              <ellipse cx="126" cy="105" rx="38" ry="16" />
              <ellipse cx="110" cy="108" rx="20" ry="10" />
              <ellipse cx="142" cy="108" rx="22" ry="10" />
              {/* Tree 2 */}
              <path d="M420 108 h14 v22 h-14z" />
              <ellipse cx="427" cy="100" rx="44" ry="18" />
              <ellipse cx="405" cy="104" rx="22" ry="10" />
              <ellipse cx="451" cy="104" rx="24" ry="10" />
              {/* Tree 3 */}
              <path d="M860 112 h12 v20 h-12z" />
              <ellipse cx="866" cy="104" rx="36" ry="16" />
              <ellipse cx="848" cy="108" rx="18" ry="9" />
              <ellipse cx="884" cy="108" rx="20" ry="9" />
              {/* Tree 4 */}
              <path d="M1180 110 h12 v20 h-12z" />
              <ellipse cx="1186" cy="102" rx="34" ry="14" />
              <ellipse cx="1168" cy="106" rx="18" ry="8" />
              <ellipse cx="1202" cy="106" rx="18" ry="8" />
            </g>
          </svg>

          {/* Flock of birds */}
          <svg ref={birdsRef} className="absolute left-0 top-20 w-full h-24" viewBox="0 0 800 120" preserveAspectRatio="none">
            {Array.from({ length: 5 }).map((_, i) => (
              <g key={i} className="bird" transform={`translate(${-(i * 120)}, ${20 + i * 10}) scale(${0.6 + i * 0.1})`}>
                {/* simple gull-like bird using two wings */}
                <path className="wing" d="M0 20 Q20 0 40 20" stroke="rgba(255,255,255,0.9)" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path className="wing" d="M0 20 Q20 12 40 20" stroke="rgba(255,255,255,0.9)" strokeWidth="2" fill="none" strokeLinecap="round" />
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* Copy/CTAs */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Luxe Safari Experiences
          </span>
          <h1 ref={titleRef} className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            A Cinematic Safari in Motion
          </h1>
          <p ref={subtitleRef} className="mt-5 text-base md:text-lg text-white/80 max-w-xl">
            Feel the savanna come alive with warm horizons, acacia silhouettes, and flocks drifting overhead — then step into a bespoke journey crafted around you.
          </p>
          <div ref={ctaRef} className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#destinations" className="inline-flex items-center rounded-full bg-[#990000] text-white px-6 py-3 font-semibold shadow-lg shadow-[#990000]/30 hover:shadow-[#990000]/50 transition">
              Explore Destinations
            </a>
            <a href="#tours" className="inline-flex items-center rounded-full border border-white/20 text-white px-6 py-3 font-semibold hover:bg-white/10 transition">
              View Signature Tours
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/70">
            <div>Private Reserves</div>
            <div>Expert Trackers</div>
            <div>Handpicked Lodges</div>
          </div>
        </div>
        <div className="md:col-span-5" />
      </div>
    </section>
  );
}
