import React, { useEffect } from 'react';
import anime from 'animejs';

export default function NavBar() {
  useEffect(() => {
    anime({
      targets: '.nav-item',
      opacity: [0, 1],
      translateY: [-10, 0],
      delay: anime.stagger(100, { start: 200 }),
      duration: 600,
      easing: 'easeOutQuad',
    });
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-30 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-extrabold tracking-tight text-gray-900">Ubuntu Luxe</a>
        <nav className="hidden md:flex items-center gap-8 text-gray-700">
          <a href="#destinations" className="nav-item hover:text-gray-900">Destinations</a>
          <a href="#tours" className="nav-item hover:text-gray-900">Tours</a>
          <a href="#testimonials" className="nav-item hover:text-gray-900">Testimonials</a>
        </nav>
        <a href="#contact" className="nav-item inline-flex items-center rounded-full bg-[#990000] text-white px-4 py-2 font-semibold shadow-sm hover:shadow-md transition">
          Enquire Now
        </a>
      </div>
    </header>
  );
}
