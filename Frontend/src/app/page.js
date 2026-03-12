'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getLandingData } from "../services/dataService";

export default function Home() {
  const [data, setData] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const result = await getLandingData();
      setData(result);
    }
    fetchData();

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!data) return <div className="min-h-screen bg-black" />;

  return (
    <div className="flex flex-col min-h-screen relative">

      {/* 
         GLOBAL BACKGROUND 
         Fixed position ensures it covers the entire scrollable area (Hero + Features),
         creating the continuous effect the user requested.
      */}
      <div className="fixed inset-0 z-[-1]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* HERO SECTION (Directly implemented per request) */}
      <section className="relative overflow-hidden min-h-screen flex items-center pt-48 pb-20 lg:pt-64 lg:pb-32">
        <div className="container mx-auto px-4 relative z-20 text-center">

          {/* Title */}
          <h1 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight leading-tight text-white drop-shadow-lg">
            {data.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-xl text-gray-200 mb-12 leading-relaxed drop-shadow-md">
            {data.hero.subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/news"
              className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all transform hover:scale-105 shadow-xl"
            >
              {data.hero.cta}
            </Link>
            <button className="px-8 py-4 rounded-full border border-white/30 bg-white/5 hover:bg-white/10 transition-all text-white font-medium backdrop-blur-sm">
              Ver Documentación
            </button>
          </div>
        </div>
      </section>



    </div>
  );
}
