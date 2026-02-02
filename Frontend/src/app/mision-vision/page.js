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
      <section className="relative overflow-hidden flex items-center pt-48 pb-10 lg:pt-56 lg:pb-16 text-center">
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
                 <div className="relative z-10 p-10 border border-white/10 rounded-full bg-black/20 backdrop-blur-sm">
                    <span className="text-9xl">🚀</span>
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
                 <div className="relative z-10 p-10 border border-white/10 rounded-full bg-black/20 backdrop-blur-sm">
                    <span className="text-9xl">👁️</span>
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
