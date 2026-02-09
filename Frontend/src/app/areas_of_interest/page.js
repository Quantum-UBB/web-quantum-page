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
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {/* Emoji fallback for now, ideally would use Lucide icons */}
                  <span className="text-3xl text-white">
                      {area.icon === 'Brain' ? '🧠' : 
                       area.icon === 'Atom' ? '⚛️' : 
                       area.icon === 'Shield' ? '🛡️' : 
                       area.icon === 'Link' ? '🔗' : 
                       area.icon === 'Cloud' ? '☁️' : '✏️'}
                  </span>
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
