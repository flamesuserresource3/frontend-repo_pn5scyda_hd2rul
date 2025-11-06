import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function SectionHeading({ eyebrow, title, subtitle }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    anime({ targets: ref.current, opacity: [0, 1], translateY: [20, 0], duration: 700, easing: 'easeOutExpo' });
  }, []);

  return (
    <div ref={ref} className="text-center max-w-3xl mx-auto">
      {eyebrow && <div className="text-xs uppercase tracking-[0.2em] text-gray-500">{eyebrow}</div>}
      <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">{title}</h2>
      {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
    </div>
  );
}
