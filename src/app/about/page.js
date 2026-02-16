import Link from 'next/link';
import Image from 'next/image';
import { getAboutData } from "../../services/dataService";

export default async function About() {
  const data = await getAboutData();

  return (
    <div className="flex flex-col min-h-screen relative">

      {/* 
         GLOBAL BACKGROUND 
         Reusing the background style for consistency
      */}
      <div className="fixed inset-0 z-[-1]">
        <Image
          src="/home.jpg"
          alt="Quantum Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden flex items-center pt-48 pb-10 lg:pt-64 lg:pb-20">
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight text-white drop-shadow-lg">
            {data.hero.title}
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-200 mb-8 leading-relaxed drop-shadow-md">
            {data.hero.subtitle}
          </p>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
             {/* Mission */}
            <div className="p-8 rounded-2xl glass-panel bg-white/5 border border-white/10 backdrop-blur-md">
                <h2 className="text-3xl font-bold mb-4 text-purple-400">{data.mission.title}</h2>
                <p className="text-gray-200 text-lg leading-relaxed">
                    {data.mission.description}
                </p>
            </div>
            {/* Vision */}
            <div className="p-8 rounded-2xl glass-panel bg-white/5 border border-white/10 backdrop-blur-md">
                <h2 className="text-3xl font-bold mb-4 text-pink-500">{data.vision.title}</h2>
                <p className="text-gray-200 text-lg leading-relaxed">
                    {data.vision.description}
                </p>
            </div>
          </div>

          {/* VALUES SECTION */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Nuestros Valores</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.values.map((value) => (
              <div
                key={value.id}
                className="p-8 rounded-2xl glass-panel hover:bg-white/10 transition-colors border border-white/10 group backdrop-blur-md"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-6 backdrop-blur-sm group-hover:scale-110 group-hover:bg-cyan-500/30 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                  {(() => {
                    const iconClass = "w-7 h-7 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300";
                    switch (value.icon) {
                      case 'Lightbulb':
                        return (
                          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        );
                      case 'Users':
                        return (
                           <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        );
                      default: // Heart check
                        return (
                          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        );
                    }
                  })()}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md">{value.title}</h3>
                <p className="text-gray-200 leading-relaxed drop-shadow-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
