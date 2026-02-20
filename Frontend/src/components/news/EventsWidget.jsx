import React, { useMemo } from 'react';
import Link from 'next/link';

const EventsWidget = ({ events }) => {
    
    const activeEvent = useMemo(() => {
        if (!events || events.length === 0) return null;
        const now = new Date();
        const upcoming = events.filter(e => new Date(e.date) >= now).sort((a,b) => new Date(a.date) - new Date(b.date));
        return upcoming[0];
    }, [events]);

    if (!activeEvent) return null;

    const dateObj = new Date(activeEvent.date);
    const dateStr = dateObj.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
    const timeStr = dateObj.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

    return (
        <div className="mb-8 p-5 rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/30 to-gray-900/50 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.1)] relative overflow-hidden group">
            
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
            
            <div className="flex items-center justify-between mb-3 border-b border-gray-700/50 pb-2">
                <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                    En Curso / Próximo
                </span>
                <span className="text-xs text-gray-400 font-mono">{dateStr}</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-cyan-300 transition-colors">
                {activeEvent.title}
            </h3>

            <div className="flex items-center gap-3 text-sm text-gray-300 mb-4">
                <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>{timeStr}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span>{activeEvent.location}</span>
                </div>
            </div>

            <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                {activeEvent.description}
            </p>

            <Link href={`/news/event/${activeEvent.id}`} className="inline-flex text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-wider items-center gap-1">
                Ver Detalles 
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
        </div>
    );
};

export default EventsWidget;
