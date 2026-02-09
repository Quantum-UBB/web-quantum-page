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
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <div className="text-white font-bold text-xl">{value.icon === 'Lightbulb' ? '💡' : value.icon === 'Users' ? '🤝' : '❤️'}</div>
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
