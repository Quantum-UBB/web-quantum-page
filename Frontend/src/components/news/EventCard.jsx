import Link from 'next/link';

const EventCard = ({ event, type, onPin }) => {
    // type: 'primary' (destacado/activo) o 'secondary' (pasado/futuro)
    
    const isPrimary = type === 'primary';
    const dateObj = new Date(event.date);
    const dateStr = dateObj.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });

    return (
        <div className="relative group block h-full">
            {/* Admin Pin Button */}
            {onPin && (
                <button 
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onPin(event);
                    }}
                    className="absolute top-3 right-3 z-30 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 hover:scale-110 border border-white/20 shadow-lg text-white"
                    title="Fijar como destacado"
                >
                    <svg className="w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                </button>
            )}

            <Link href={`/news/event/${event.id}`} className={`block h-full relative overflow-hidden rounded-xl border border-gray-800 transition-all hover:border-cyan-500/30 ${isPrimary ? 'mb-6 shadow-[0_0_20px_rgba(34,211,238,0.1)]' : 'opacity-80 hover:opacity-100'}`}>
                
                {/* Image Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent z-10 ${isPrimary ? 'opacity-80' : 'opacity-70'}`}></div>
                
                {/* Image */}
                <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Content using absolute positioning over the image */}
                <div className={`relative z-20 p-5 flex flex-col justify-end h-full min-h-[16rem]`}>
                    
                    <div className="mb-2">
                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2 ${isPrimary ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'bg-gray-700/50 text-gray-300 border border-gray-600'}`}>
                            {isPrimary ? 'En Curso / Próximo' : 'Evento'}
                        </span>
                        <span className="text-gray-400 text-xs block font-mono">
                            {dateStr} {event.location ? `• ${event.location}` : ''}
                        </span>
                    </div>

                    <h3 className={`font-bold text-white leading-tight ${isPrimary ? 'text-xl' : 'text-lg'}`}>
                        {event.title}
                    </h3>
                    
                    {isPrimary && (
                        <p className="text-gray-300 text-sm mt-2 line-clamp-2">
                            {event.description}
                        </p>
                    )}
                </div>
            </Link>
        </div>
    );
};

export default EventCard;
