import Link from 'next/link';
import Image from 'next/image';
import { getAreasData } from "../../services/dataService";

export default async function AreasOfInterest() {
  const data = await getAreasData();

  return (
    <div className="flex flex-col min-h-screen relative">

      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 z-[-1]">
        <Image
          src="/home.jpg"
          alt="Quantum Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden flex items-center pt-48 pb-10 lg:pt-64 lg:pb-16 text-center">
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight text-white drop-shadow-lg font-[family-name:var(--font-orbitron)]">
            {data.hero.title}
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-300 mb-8 leading-relaxed drop-shadow-md">
            {data.hero.subtitle}
          </p>
        </div>
      </section>

      {/* AREAS GRID */}
      <section className="py-12 relative pb-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.areas.map((area) => (
              <div
                key={area.id}
                className="group relative p-8 rounded-2xl glass-panel bg-white/5 border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300 hover:-translate-y-2"
              >
                 {/* Hover Gradient Effect */}
                 <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${area.color}`}></div>

                {/* Icon Wrapper */}
                {/* Icon Wrapper - Minimalist */}
                <div className={`w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 backdrop-blur-sm group-hover:scale-110 group-hover:border-cyan-500/30 transition-all duration-300`}>
                  {(() => {
                    const iconClass = "w-7 h-7 text-gray-300 group-hover:text-cyan-400 transition-colors duration-300";
                    switch (area.icon) {
                      case 'Brain':
                        return (
                          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        );
                      case 'Atom':
                        return (
                          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                          </svg>
                        );
                        // Let's use a better Atom path
                      case 'Shield':
                        return (
                          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        );
                      case 'Link':
                        return (
                          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                        );
                      case 'Cloud':
                        return (
                          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                          </svg>
                        );
                      case 'PenTool':
                        return (
                          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        );
                      default:
                        // Atom fallback proper path
                        return (
                           <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        );
                    }
                  })()}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-orbitron)] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                    {area.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                    {area.description}
                </p>

                <Link href="#" className="inline-flex items-center text-sm font-bold text-white uppercase tracking-wider hover:underline decoration-[#14E19D] underline-offset-4 decoration-2">
                    Explorar Curso  <span className="ml-2">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
