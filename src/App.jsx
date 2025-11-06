import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import SectionHeading from './components/SectionHeading';
import Carousel from './components/Carousel';
import { DestinationCard, TourCard, TestimonialCard } from './components/ShowcaseCards';
import anime from 'animejs';

const destinations = [
  {
    image: 'https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1200&auto=format&fit=crop',
    title: 'Kruger National Park',
    location: 'Mpumalanga & Limpopo',
  },
  {
    image: 'https://images.unsplash.com/photo-1612703252506-e2f1f674752d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxLcnVnZXIlMjBOYXRpb25hbCUyMFBhcmt8ZW58MHwwfHx8MTc2MjQxODg3Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    title: 'Sabi Sands Game Reserve',
    location: 'Greater Kruger',
  },
  {
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop',
    title: 'Pilanesberg National Park',
    location: 'North West',
  },
  {
    image: 'https://images.unsplash.com/photo-1661696710086-c84f5471aeb3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQaWxhbmVzYmVyZyUyME5hdGlvbmFsJTIwUGFya3xlbnwwfDB8fHwxNzYyNDE4ODc2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    title: 'Addo Elephant Park',
    location: 'Eastern Cape',
  },
  {
    image: 'https://images.unsplash.com/photo-1635191750183-1fc6422b795f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBZGRvJTIwRWxlcGhhbnQlMjBQYXJrfGVufDB8MHx8fDE3NjI0MTg4Nzd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    title: 'Table Mountain National Park',
    location: 'Cape Town',
  },
];

const tours = [
  {
    image: 'https://images.unsplash.com/photo-1577704990976-c24e9ee70b2d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCaWclMjBGaXZlJTIwU2lnbmF0dXJlJTIwU2FmYXJpfGVufDB8MHx8fDE3NjI0MTg4Nzd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    title: 'Big Five Signature Safari',
    days: 8,
  },
  {
    image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1200&auto=format&fit=crop',
    title: 'Cape, Winelands & Whale Coast',
    days: 7,
  },
  {
    image: 'https://images.unsplash.com/photo-1549122728-f519709caa9c?q=80&w=1200&auto=format&fit=crop',
    title: 'Kalahari & Desert Stars',
    days: 6,
  },
];

const testimonials = [
  {
    quote: 'We tracked lions at dawn, sipped sundowners at dusk, and slept under a million stars — flawless from start to finish.',
    author: 'Ava M.',
    role: 'Dubai',
    avatar: 'https://images.unsplash.com/photo-1531123414780-f742f3cf17b2?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote: 'Every lodge exceeded expectations. Seamless flights, private transfers, and a guide who knew every secret waterhole.',
    author: 'James K.',
    role: 'London',
    avatar: 'https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote: 'We saw the Big 5 in two days. The team crafted an itinerary that felt personal and luxurious.',
    author: 'Naledi S.',
    role: 'Johannesburg',
    avatar: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=200&auto=format&fit=crop',
  },
];

export default function App() {
  useEffect(() => {
    anime({
      targets: 'body',
      backgroundColor: ['#ffffff', '#ffffff'],
      duration: 1,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <NavBar />
      <Hero />

      <main>
        <section id="destinations" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              eyebrow="Nature Reserves & Coast"
              title="Featured Destinations"
              subtitle="Handpicked sanctuaries across South Africa — from Big Five reserves to oceanfront escapes."
            />
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {destinations.slice(0, 3).map((d, i) => (
                <DestinationCard key={i} {...d} />
              ))}
            </div>
          </div>
        </section>

        <Carousel
          id="tours"
          title="Signature Tours"
          items={tours}
          renderItem={(t) => <TourCard {...t} />}
        />

        <section id="testimonials" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              eyebrow="Guest Stories"
              title="Testimonials"
              subtitle="Real moments from our travelers across Kruger, Sabi Sands, and the Cape."
            />
            <div className="mt-10">
              <Carousel
                id="testimonials-carousel"
                items={testimonials}
                renderItem={(t) => <TestimonialCard {...t} />}
              />
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              eyebrow="The Big Five"
              title="In the Wild"
              subtitle="Lion, Leopard, Rhino, Elephant, and Cape Buffalo — captured across our private reserves."
            />
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'https://images.unsplash.com/photo-1552415181-94bb3e7f1c63?q=80&w=900&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?q=80&w=900&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1558980664-10eb5ca7f716?q=80&w=900&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1559599238-1c1e3c2de2b6?q=80&w=900&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1466906461251-290ae304e59c?q=80&w=900&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1516029452640-8b2a0d0b0f02?q=80&w=900&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=900&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=900&auto=format&fit=crop',
              ].map((src, i) => (
                <div key={i} className="group overflow-hidden rounded-xl border border-gray-200">
                  <img src={src} alt="Big Five" className="h-44 w-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-600">© {new Date().getFullYear()} Ubuntu Luxe Travel. All rights reserved.</div>
            <a href="#" className="inline-flex items-center rounded-full bg-[#990000] text-white px-5 py-2 font-semibold">Plan Your Journey</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
