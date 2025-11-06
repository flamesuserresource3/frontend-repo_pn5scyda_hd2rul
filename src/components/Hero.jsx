import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    // Text entrance
    anime.timeline({ easing: 'easeOutExpo' })
      .add({ targets: titleRef.current, translateY: [40, 0], opacity: [0, 1], duration: 800 })
      .add({ targets: subtitleRef.current, translateY: [40, 0], opacity: [0, 1], duration: 700 }, '-=400')
      .add({ targets: ctaRef.current, scale: [0.9, 1], opacity: [0, 1], duration: 700 }, '-=300');

    // Safari scene animations
    const scene = sceneRef.current;
    if (!scene) return;

    // Sun rise
    anime({
      targets: '#sun',
      translateY: [80, 0],
      opacity: [0, 1],
      duration: 1800,
      easing: 'easeOutQuad',
    });

    // Birds flight loop
    anime({
      targets: ['#bird1', '#bird2', '#bird3'],
      translateX: [0, 300],
      translateY: [0, -20],
      opacity: [0, 1],
      delay: anime.stagger(300),
      duration: 6000,
      easing: 'easeInOutSine',
      direction: 'alternate',
      loop: true,
    });

    // Elephant walking (slight bob + slow move)
    anime({
      targets: '#elephant',
      translateX: [-40, 120],
      duration: 14000,
      easing: 'linear',
      loop: true,
      direction: 'alternate',
    });
    anime({
      targets: '#elephant',
      translateY: [0, -3],
      duration: 900,
      easing: 'easeInOutSine',
      loop: true,
      direction: 'alternate',
    });

    // Dust puffs near elephant
    anime({
      targets: ['#dust1', '#dust2', '#dust3'],
      opacity: [{ value: 0.6, duration: 0 }, { value: 0.2, duration: 1200 }],
      translateX: [0, 20],
      translateY: [0, -8],
      scale: [0.8, 1.2],
      delay: anime.stagger(600),
      loop: true,
      easing: 'easeOutQuad',
    });

    // Heat haze over horizon
    anime({
      targets: '#haze',
      translateY: [0, -2],
      opacity: [0.1, 0.25],
      duration: 2500,
      direction: 'alternate',
      easing: 'easeInOutSine',
      loop: true,
    });

    // Foreground grass sway
    anime({
      targets: ['#grass1', '#grass2', '#grass3', '#grass4'],
      rotate: ['-2deg', '2deg'],
      transformOrigin: 'bottom center',
      duration: 2200,
      delay: anime.stagger(200),
      direction: 'alternate',
      easing: 'easeInOutSine',
      loop: true,
    });
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full bg-gradient-to-b from-[#FFF8EE] via-[#FFF3E1] to-white text-gray-800 overflow-hidden">
      {/* Animated safari banner using SVG + anime.js */}
      <div className="absolute inset-0">
        <svg ref={sceneRef} viewBox="0 0 1440 720" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
          {/* Sky gradient backdrop */}
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFE7B7" />
              <stop offset="60%" stopColor="#FFD7A3" />
              <stop offset="100%" stopColor="#FFF3E1" />
            </linearGradient>
            <linearGradient id="sunGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFD27D" />
              <stop offset="100%" stopColor="#FFB347" />
            </linearGradient>
          </defs>

          <rect x="0" y="0" width="1440" height="720" fill="url(#sky)" />

          {/* Sun */}
          <g id="sun" transform="translate(1080,200)">
            <circle r="60" fill="url(#sunGrad)" />
            <circle r="80" fill="#FFB347" opacity="0.2" />
          </g>

          {/* Distant mountains/horizon */}
          <path id="hills" d="M0,430 C200,400 300,430 470,420 C640,410 760,450 940,430 C1120,410 1260,430 1440,420 L1440,720 L0,720 Z" fill="#EECDA9" opacity="0.6" />

          {/* Acacia trees silhouettes */}
          <g id="trees" fill="#5A4A3A" opacity="0.85">
            <path d="M200 430 l10 -40 l10 40 l0 20 l-20 0 Z" />
            <ellipse cx="220" cy="385" rx="60" ry="16" />
            <path d="M520 430 l8 -35 l8 35 l0 18 l-16 0 Z" />
            <ellipse cx="536" cy="392" rx="55" ry="14" />
            <path d="M980 430 l10 -40 l10 40 l0 22 l-20 0 Z" />
            <ellipse cx="1000" cy="388" rx="70" ry="18" />
          </g>

          {/* Heat haze strip */}
          <rect id="haze" x="0" y="420" width="1440" height="20" fill="#F6D7B0" opacity="0.15" />

          {/* Elephant silhouette with dust */}
          <g id="elephant" transform="translate(320,470)">
            <path d="M0 0 c40 -10 90 0 120 10 c10 3 20 2 28 -5 c14 -12 26 -15 34 -10 c6 4 8 15 5 28 c-3 12 6 22 18 26 c8 3 12 10 10 18 c-3 10 -16 16 -30 12 c-8 -2 -18 -7 -26 -12 c-8 -5 -16 -6 -24 -4 c-14 4 -28 7 -42 7 c-20 0 -40 -4 -60 -10 c-10 -3 -20 2 -26 12 c-5 8 -14 12 -22 9 c-10 -4 -14 -14 -10 -24 c4 -9 11 -17 20 -22 c12 -7 24 -15 35 -25 Z" fill="#3F3A34" />
            <circle id="dust1" cx="-10" cy="30" r="6" fill="#C6A57B" opacity="0" />
            <circle id="dust2" cx="10" cy="34" r="5" fill="#C6A57B" opacity="0" />
            <circle id="dust3" cx="28" cy="32" r="4" fill="#C6A57B" opacity="0" />
          </g>

          {/* Foreground grass */}
          <g fill="#9C7F54">
            <path id="grass1" d="M80 520 l8 -30 l6 30 Z" />
            <path id="grass2" d="M260 525 l10 -34 l8 34 Z" />
            <path id="grass3" d="M760 518 l7 -28 l6 28 Z" />
            <path id="grass4" d="M1200 522 l9 -32 l7 32 Z" />
          </g>

          {/* Ground layer */}
          <rect x="0" y="520" width="1440" height="200" fill="#F1D6AF" />

          {/* Birds */}
          <g fill="#3F3A34" opacity="0.9">
            <path id="bird1" d="M160 180 q20 -15 40 0 q-20 -10 -40 0 Z" />
            <path id="bird2" d="M220 210 q18 -14 36 0 q-18 -10 -36 0 Z" />
            <path id="bird3" d="M280 190 q16 -12 32 0 q-16 -10 -32 0 Z" />
          </g>
        </svg>
        {/* Warm gradient overlay to soften tones */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/40 pointer-events-none" />
      </div>

      {/* Copy/CTAs */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 ref={titleRef} className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            South Africa, Curated in Luxury
          </h1>
          <p ref={subtitleRef} className="mt-5 text-lg md:text-xl text-gray-600 max-w-xl">
            Bespoke safaris and private reserves — sunrise game drives, starlit dinners, and effortless travel.
          </p>
          <div ref={ctaRef} className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#destinations" className="inline-flex items-center rounded-full bg-[#990000] text-white px-6 py-3 font-semibold shadow-lg shadow-[#990000]/20 hover:shadow-[#990000]/40 transition">
              Explore Destinations
            </a>
            <a href="#tours" className="inline-flex items-center rounded-full border border-gray-300 text-gray-800 px-6 py-3 font-semibold hover:bg-gray-50 transition">
              View Signature Tours
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-gray-600">
            <div>Big Five Tracking</div>
            <div>Private Reserves & Lodges</div>
            <div>Ocean & Winelands Retreats</div>
          </div>
        </div>

        <div className="hidden md:block" />
      </div>
    </section>
  );
}
