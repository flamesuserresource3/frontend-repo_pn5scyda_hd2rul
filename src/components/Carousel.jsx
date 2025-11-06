import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

export default function Carousel({ id, items, renderItem, title }) {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  const slideTo = (i) => {
    const next = (i + items.length) % items.length;
    setIndex(next);
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll('.card');
    anime.stagger(0);
    anime({
      targets: cards,
      opacity: [0, 1],
      translateY: [16, 0],
      delay: anime.stagger(120),
      duration: 600,
      easing: 'easeOutQuad',
    });
  }, []);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('.card');
    if (!cards) return;
    anime({
      targets: cards,
      translateX: [0, (-index) * 100 + '%'],
      easing: 'easeInOutQuad',
      duration: 700,
    });
  }, [index]);

  return (
    <section id={id} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {title && <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>}
        <div className="relative overflow-hidden">
          <div ref={containerRef} className="flex transition-all will-change-transform">
            {items.map((item, i) => (
              <div key={i} className="card shrink-0 w-full md:w-1/3 pr-6">
                {renderItem(item)}
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <button onClick={() => slideTo(index - 1)} className="rounded-full border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50">Prev</button>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button key={i} onClick={() => slideTo(i)} className={`h-2 w-2 rounded-full ${i === index ? 'bg-[#990000]' : 'bg-gray-300'}`} />
              ))}
            </div>
            <button onClick={() => slideTo(index + 1)} className="rounded-full border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </section>
  );
}
