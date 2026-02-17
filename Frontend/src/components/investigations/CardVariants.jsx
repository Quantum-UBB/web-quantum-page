import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';

// Definición de fuentes
const playfair = Playfair_Display({ subsets: ['latin'] });

// 10. Panel Industrial (Edición Serif - Temático)
export const IndustrialPanelSerif = (props) => {
    // Lógica de Color Estricta: Solo 2 estados
    const isEnCurso = props.status === 'En Curso';
    const isAdmin = true; // Mock: Cambiar a lógica de auth real en el futuro

    // RGB(186, 17, 73) -> #BA1149 (Rojo/Carmesí) para 'En Curso'
    // Esmeralda -> #14E19D para 'Finalizado' (u otros)
    const mainColor = isEnCurso ? '#BA1149' : '#14E19D';

    // Fondo lateral: Rojo oscuro o Pizarra oscuro
    const bgSideColor = isEnCurso ? '#3A0515' : '#0F172A';

    return (
        <div className={`bg-[#1E293B] rounded-lg overflow-hidden border border-slate-700 hover:border-slate-500 transition-all ${playfair.className} flex flex-col h-full shadow-lg hover:shadow-2xl`}>
            <div className="flex flex-1">
                {/* Barra Lateral con Estado Vertical */}
                <div
                    className="w-12 flex flex-col items-center py-4 border-r border-slate-700 transition-colors duration-300"
                    style={{ backgroundColor: bgSideColor }}
                >
                    <span
                        className="whitespace-nowrap text-xs font-bold tracking-widest mt-8 uppercase transition-colors duration-300 -rotate-90"
                        style={{ color: mainColor }}
                    >
                        {props.status}
                    </span>
                </div>

                {/* Contenido Principal */}
                <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-white font-bold text-xl mb-2 italic leading-tight">{props.title}</h3>

                    {/* Indicador de Color y Dificultad */}
                    <div className="flex items-center justify-between mb-4">
                        <div
                            className="w-12 h-1 flex-shrink-0"
                            style={{ backgroundColor: mainColor }}
                        ></div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 border border-slate-700 px-2 py-0.5 rounded bg-slate-800/50">
                            {props.difficulty}
                        </span>
                    </div>

                    <div className="flex-1">
                        <p className="text-sm text-slate-400 mb-1 font-sans">{props.researcher}</p>
                        <p className="text-xs text-slate-500 mb-4 font-sans">{props.lastUpdate}</p>

                        {/* Etiquetas / Tags */}
                        <div className="flex flex-wrap gap-2 mb-4 min-h-[24px]">
                            {props.tags && props.tags.map(tag => (
                                <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 font-sans">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Botones de Acción */}
                    <div className="mt-auto pt-4 border-t border-slate-700/50 flex items-center justify-between">
                        <Link href={`/investigations/${props.id}`} className="inline-flex items-center gap-2 group/link">
                            <span
                                className="text-sm font-bold border-b pb-0.5 transition-colors font-sans"
                                style={{ color: mainColor, borderColor: mainColor }}
                            >
                                Ver Detalles
                            </span>
                            <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke={mainColor} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </Link>

                        {isAdmin && (
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    props.onTogglePublicar && props.onTogglePublicar(props.id);
                                }}
                                className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded border border-slate-700 transition-all flex items-center gap-2 ${props.publicada
                                        ? 'bg-[#BA1149] text-white border-[#BA1149] hover:bg-transparent hover:text-[#BA1149]'
                                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                                    }`}
                                title={props.publicada ? "Dejar de publicar esta investigación" : "Publicar esta investigación"}
                            >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {props.publicada ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12" />
                                    )}
                                </svg>
                                {props.publicada ? "Ocultar" : "Publicar"}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
