import React, { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FutureEventsSection = ({ events }) => {
    
    const futureEvents = useMemo(() => {
        if (!events) return [];
        const now = new Date();
        return events.filter(e => new Date(e.date) >= now).sort((a,b) => new Date(a.date) - new Date(b.date));
    }, [events]);

    const handleRegistration = (e) => {
        e.preventDefault();
        e.stopPropagation();
        alert("Debes poseer una cuenta para realizar esta acción.");
    };

    if (futureEvents.length === 0) return null;

    return (
        <div className="relative w-screen left-[calc(-50vw+50%)] bg-slate-100/90 backdrop-blur-sm text-gray-900 py-20 mb-20 shadow-xl border-y border-gray-200 will-change-transform">
            <div className="max-w-7xl mx-auto px-6">
                
                <h2 className="text-3xl font-bold text-gray-900 mb-10 border-l-4 border-cyan-600 pl-4">
                    Próximos Eventos
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                
                    {/* Left Sidebar (Filters) */}
                    <div className="lg:col-span-1 space-y-8">
                        <div>
                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Zona Horaria:</h4>
                            <div className="relative">
                                <select className="w-full bg-white border border-gray-300 text-gray-900 py-2 px-3 rounded focus:outline-none focus:border-cyan-600 appearance-none cursor-pointer font-medium shadow-sm">
                                    <option>Santiago (CLT)</option>
                                    <option>Buenos Aires (ART)</option>
                                    <option>New York (EST)</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Tipo de Evento:</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="font-bold text-cyan-700 border-l-2 border-cyan-600 pl-3 block">Todos</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-cyan-600 pl-3 block border-l-2 border-transparent hover:border-gray-300 transition-colors">Lanzamientos</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-cyan-600 pl-3 block border-l-2 border-transparent hover:border-gray-300 transition-colors">Webinars</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-cyan-600 pl-3 block border-l-2 border-transparent hover:border-gray-300 transition-colors">Conferencias</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Grid (Event Cards) */}
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {futureEvents.map(event => (
                            <Link key={event.id} href={`/news/event/${event.id}`} className="block h-full"> 
                                <div className="group cursor-pointer flex flex-col h-full bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 overflow-hidden">
                                    <div className="relative aspect-video overflow-hidden bg-gray-200">
                                        <Image 
                                            src={event.image} 
                                            alt={event.title} 
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                                    </div>
                                    
                                    <div className="p-5 flex flex-col flex-grow">
                                        <div className="text-xs font-bold text-cyan-700 uppercase tracking-widest mb-2">
                                            {new Date(event.date).toLocaleDateString('es-ES', { month: 'long', year: 'numeric', day: 'numeric' })}
                                        </div>
                                        
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-cyan-700 transition-colors">
                                            {event.title}
                                        </h3>

                                        <div className="mt-auto pt-4 flex gap-3 text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase border-t border-gray-100">
                                            <span className="hover:text-cyan-600 transition-colors">INFO</span>
                                            <button 
                                                onClick={handleRegistration}
                                                className="hover:text-cyan-600 transition-colors uppercase tracking-[0.2em] bg-transparent border-none p-0 text-[10px] font-bold text-gray-400 cursor-pointer"
                                            >
                                                INSCRIPCIÓN
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FutureEventsSection;
