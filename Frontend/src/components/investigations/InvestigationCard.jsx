import Link from 'next/link';

const InvestigationCard = ({ title, status, researcher, lastUpdate, tags = [], id }) => {
    // Lógica de Color Estricta: Solo 2 estados
    const isEnCurso = status === 'En Curso';

    // Definición de Clases de Color según estado
    // Rojo (#BA1149) vs Esmeralda (#14E19D)
    const mainColorClass = isEnCurso ? 'text-[#BA1149]' : 'text-[#14E19D]';
    const bgDotClass = isEnCurso ? 'bg-[#BA1149]' : 'bg-[#14E19D]';
    const hoverBorderClass = isEnCurso ? 'hover:border-[#BA1149]' : 'hover:border-[#14E19D]';
    const hoverTextClass = isEnCurso ? 'hover:text-[#BA1149]' : 'hover:text-[#14E19D]';
    const buttonHoverBg = isEnCurso ? 'hover:bg-[#BA1149]' : 'hover:bg-[#14E19D]';

    return (
        <div className={`group relative bg-[#1E293B] border border-slate-700 ${hoverBorderClass} rounded-xl overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1`}>
            <div className="p-6 flex flex-col h-full">
                {/* Encabezado: Estado */}
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700">
                        <span className={`w-2 h-2 rounded-full animate-pulse ${bgDotClass}`}></span>
                        <span className={`text-xs font-semibold tracking-wider uppercase ${mainColorClass}`}>
                            {status}
                        </span>
                    </div>
                </div>

                {/* Título */}
                <h3 className={`text-xl font-bold text-white mb-4 line-clamp-2 leading-tight transition-colors ${hoverTextClass}`}>
                    {title}
                </h3>

                {/* Etiquetas / Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className={`px-2 py-1 text-[10px] uppercase tracking-wider font-semibold text-slate-300 bg-slate-800 rounded border border-slate-700 transition-colors cursor-pointer ${hoverBorderClass} ${hoverTextClass}`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Meta Información */}
                <div className="mt-auto space-y-3 pt-4 border-t border-slate-700/50">
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <svg className={`w-4 h-4 ${mainColorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        <span className="line-clamp-1">{researcher}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <svg className={`w-4 h-4 ${mainColorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        <span>{lastUpdate}</span>
                    </div>
                </div>

                {/* Botón de Acción */}
                <div className="mt-6">
                    <Link
                        href={`/investigations/${id}`}
                        className={`block w-full text-center py-2.5 px-4 rounded-lg bg-slate-700 text-white font-semibold text-sm hover:text-[#1D262F] transition-all duration-300 uppercase tracking-widest shadow-lg ${buttonHoverBg}`}
                    >
                        Leer más
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default InvestigationCard;
