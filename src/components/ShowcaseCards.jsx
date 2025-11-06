import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

export function DestinationCard({ image, title, location }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    anime({ targets: ref.current, opacity: [0, 1], translateY: [10, 0], duration: 600, easing: 'easeOutCubic' });
  }, []);
  return (
    <div ref={ref} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
      <img src={image} alt={title} className="h-56 w-full object-cover" />
      <div className="p-4">
        <div className="text-xs uppercase tracking-widest text-gray-500">{location}</div>
        <h4 className="mt-1 text-lg font-bold text-gray-900">{title}</h4>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />
    </div>
  );
}

export function TourCard({ image, title, days }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <img src={image} alt={title} className="h-56 w-full object-cover" />
      <div className="p-4">
        <h4 className="text-lg font-bold text-gray-900">{title}</h4>
        <p className="text-gray-600">{days} days • Private guide • 5-star lodges</p>
        <button className="mt-3 inline-flex items-center rounded-full bg-[#990000] text-white px-4 py-2 text-sm font-semibold">Book this tour</button>
      </div>
    </div>
  );
}

export function TestimonialCard({ quote, author, role, avatar }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
      <div className="flex items-center gap-4">
        <img src={avatar} alt={author} className="h-12 w-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold text-gray-900">{author}</div>
          <div className="text-sm text-gray-500">{role}</div>
        </div>
      </div>
      <p className="mt-4 text-gray-700">“{quote}”</p>
    </div>
  );
}
