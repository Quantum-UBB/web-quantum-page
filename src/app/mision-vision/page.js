import Link from 'next/link';
import Image from 'next/image';
import { getMissionVisionData } from "../../services/dataService";

export default async function MissionVision() {
  const data = await getMissionVisionData();

  return (
    <div className="flex flex-col min-h-screen relative">

      {/* 
         GLOBAL BACKGROUND 
      */}
      <div className="fixed inset-0 z-[-1]">
        <Image
          src="/home.jpg"
          alt="Quantum Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
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

      {/* MISSION & VISION DEEP DIVE */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          
          {/* Mission */}
          <div className="mb-24 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 p-8 rounded-2xl glass-panel bg-white/5 border border-purple-500/30 backdrop-blur-md shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                <h2 className="text-4xl font-bold mb-6 text-purple-400 font-[family-name:var(--font-orbitron)]">{data.mission.title}</h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                    {data.mission.mainText}
                </p>
                <ul className="space-y-3">
                    {data.mission.points.map((point, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                            <span className="text-purple-400 mr-2">➜</span>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
             {/* Decorative Element or Image Placeholder */}
            <div className="md:w-1/2 flex justify-center">
                 <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 blur-[100px] opacity-20 absolute"></div>
                 <div className="relative z-10 w-40 h-40 rounded-full border border-purple-500/30 bg-purple-600/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                    <svg className="w-20 h-20 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                 </div>
            </div>
          </div>

          {/* Vision */}
          <div className="mb-24 flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2 p-8 rounded-2xl glass-panel bg-white/5 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                <h2 className="text-4xl font-bold mb-6 text-cyan-400 font-[family-name:var(--font-orbitron)]">{data.vision.title}</h2>
                <p className="text-white text-lg leading-relaxed mb-6">
                    {data.vision.mainText}
                </p>
                <ul className="space-y-3">
                    {data.vision.points.map((point, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                            <span className="text-cyan-400 mr-2">➜</span>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
            {/* Decorative Element */}
             <div className="md:w-1/2 flex justify-center">
                 <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-cyan-600 to-teal-600 blur-[100px] opacity-20 absolute"></div>
                 <div className="relative z-10 w-40 h-40 rounded-full border border-cyan-500/30 bg-cyan-600/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                    <svg className="w-20 h-20 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                 </div>
            </div>
          </div>

          {/* STRATEGIC PILLARS */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-10 text-white font-[family-name:var(--font-orbitron)]">Pilares Estratégicos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.pillars.map((pillar, idx) => (
                    <div key={idx} className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all group">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#14E19D] transition-colors">{pillar.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {pillar.description}
                        </p>
                    </div>
                ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
