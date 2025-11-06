import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import anime from 'animejs';

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    anime.timeline({ easing: 'easeOutExpo' })
      .add({ targets: titleRef.current, translateY: [40, 0], opacity: [0, 1], duration: 800 })
      .add({ targets: subtitleRef.current, translateY: [40, 0], opacity: [0, 1], duration: 700 }, '-=400')
      .add({ targets: ctaRef.current, scale: [0.9, 1], opacity: [0, 1], duration: 700 }, '-=300');

    anime({
      targets: '.hero-float',
      translateY: [0, -8],
      direction: 'alternate',
      easing: 'easeInOutSine',
      loop: true,
      duration: 2500,
    });
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full bg-white text-gray-800">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 ref={titleRef} className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            South Africa, Curated in Luxury
          </h1>
          <p ref={subtitleRef} className="mt-5 text-lg md:text-xl text-gray-600 max-w-xl">
            Bespoke safaris, ocean escapes, and city sojourns. Seamlessly designed journeys through the Big Five reserves and beyond.
          </p>
          <div ref={ctaRef} className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#destinations" className="hero-float inline-flex items-center rounded-full bg-[#990000] text-white px-6 py-3 font-semibold shadow-lg shadow-[#990000]/20 hover:shadow-[#990000]/40 transition">
              Explore Destinations
            </a>
            <a href="#tours" className="inline-flex items-center rounded-full border border-gray-300 text-gray-800 px-6 py-3 font-semibold hover:bg-gray-50 transition">
              View Signature Tours
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-gray-600">
            <div className="hero-float">
              <span className="font-semibold text-gray-900">Big 5</span> Experiences
            </div>
            <div className="hero-float">
              Private Reserves & Lodges
            </div>
            <div className="hero-float">
              Ocean & Winelands Retreats
            </div>
          </div>
        </div>

        <div className="hidden md:block" />
      </div>
    </section>
  );
}
