import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import anime from 'animejs';

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Subtle entrance for copy
    anime.timeline({ easing: 'easeOutExpo' })
      .add({ targets: titleRef.current, translateY: [30, 0], opacity: [0, 1], duration: 700 })
      .add({ targets: subtitleRef.current, translateY: [30, 0], opacity: [0, 1], duration: 600 }, '-=350')
      .add({ targets: ctaRef.current, opacity: [0, 1], translateY: [12, 0], duration: 500 }, '-=250');
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      {/* Spline scene container - never use negative z-index */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Overlays must not block interaction with the scene */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Radial vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.15),rgba(0,0,0,0.7))]" />
          {/* Top glow */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-purple-700/20 via-purple-500/10 to-transparent" />
          {/* Bottom fade for text contrast */}
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        </div>
      </div>

      {/* Copy/CTAs */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
            Immersive Journeys
          </span>
          <h1 ref={titleRef} className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Travel, Reimagined in Living 3D
          </h1>
          <p ref={subtitleRef} className="mt-5 text-base md:text-lg text-white/80 max-w-xl">
            A bespoke planning experience that blends human expertise with interactive design. Explore concepts, feel the vibe, and lock in an itinerary you love.
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
            <div>Private Guides</div>
            <div>Seamless Transfers</div>
            <div>Handpicked Stays</div>
          </div>
        </div>
        <div className="md:col-span-5" />
      </div>
    </section>
  );
}
