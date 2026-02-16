import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { Inter, Roboto_Mono, Orbitron } from 'next/font/google';
import 'highlight.js/styles/atom-one-dark.css';
import { getInvestigationById } from '@/services/investigationService';

const inter = Inter({ subsets: ['latin'] });
const robotoMono = Roboto_Mono({ subsets: ['latin'] });
const orbitron = Orbitron({ subsets: ['latin'] });

export default async function InvestigationDetail({ params }) {
    const { id } = await params;

    // Fetch data using the service
    const rawData = getInvestigationById(id);

    // Normalizing data just in case
    const data = rawData ? {
        ...rawData,
        date: rawData.lastUpdate, // Mapping lastUpdate to date for display
        investigator: rawData.researcher // Mapping researcher to investigator for display
    } : null;

    // Colors V2 (Simplified)
    const bgDark = '#0b0f19';

    if (!data) return <div className="min-h-screen pt-40 text-center text-white bg-[#0b0f19]">Investigación no encontrada</div>;

    // Construct Markdown Content from Abstract
    const markdownContent = `
## Resumen
${data.abstract || "No hay resumen disponible para esta investigación."}
`;

    return (
        <div className={`min-h-screen pb-20 ${inter.className}`} style={{ color: '#e2e8f0' }}>

            <div className="relative z-10 max-w-[1400px] mx-auto px-8">

                {/* 1. HEADER */}
                <header className="mb-12">
                    <div className="flex flex-col gap-6">
                        <Link href="/investigations" className="inline-flex items-center text-slate-400 hover:text-[#11ba82] transition-colors text-sm font-medium tracking-wide group w-fit">
                            <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                            Volver al Listado
                        </Link>

                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-800">
                            <div className="max-w-4xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest border ${data.status === 'En Curso' ? 'bg-[#11ba82]/10 border-[#11ba82] text-[#11ba82]' : 'bg-slate-700 border-slate-600 text-slate-300'}`}>
                                        {data.status}
                                    </span>
                                    <span className="text-slate-500 text-xs uppercase tracking-wider font-mono">
                                        UPDATED: {data.date}
                                    </span>
                                </div>
                                <h1 className={`text-4xl font-bold text-white leading-tight ${orbitron.className}`}>
                                    {data.title}
                                </h1>
                            </div>

                            <div className="flex gap-4">
                                <button className="px-6 py-3 bg-[#11ba82] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#0fa675] transition-all rounded shadow-sm flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                    PDF
                                </button>
                                <button className="px-6 py-3 border border-slate-600 text-slate-300 font-bold text-xs uppercase tracking-widest hover:border-white hover:text-white transition-all rounded flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    Source
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* 2. MAIN CONTENT (70%) */}
                    <article className="lg:col-span-8">
                        {/* MARKDOWN RENDERER */}
                        <div className="prose prose-invert prose-lg max-w-none">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeHighlight]}
                                components={{
                                    h1: ({ children }) => <h1 className="text-3xl font-bold text-white mt-8 mb-6">{children}</h1>,
                                    h2: ({ children }) => <h2 className="text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800">{children}</h2>,
                                    p: ({ children }) => <p className="text-slate-300 leading-relaxed mb-6 font-light">{children}</p>,
                                    strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
                                    ul: ({ children }) => <ul className="space-y-2 my-6 list-disc pl-5">{children}</ul>,
                                    li: ({ children }) => <li className="text-slate-300 pl-1">{children}</li>,
                                    blockquote: ({ children }) => (
                                        <blockquote className="border-l-4 border-slate-700 pl-4 py-2 my-6 text-slate-400 italic">
                                            {children}
                                        </blockquote>
                                    ),
                                    code: ({ inline, className, children }) => {
                                        if (inline) return <code className={`px-1.5 py-0.5 rounded bg-[#1d262f] text-[#11ba82] font-mono text-sm ${robotoMono.className}`}>{children}</code>;
                                        return <code className={`${className} ${robotoMono.className} text-sm`}>{children}</code>;
                                    },
                                    table: ({ children }) => (
                                        <div className="overflow-x-auto my-8 border border-slate-800 rounded">
                                            <table className="w-full text-left border-collapse">{children}</table>
                                        </div>
                                    ),
                                    th: ({ children }) => <th className="bg-[#141b2d] p-3 text-sm font-bold text-white border-b border-slate-700">{children}</th>,
                                    td: ({ children }) => <td className="p-3 text-sm text-slate-300 border-b border-slate-800/50 font-mono">{children}</td>,
                                }}
                            >
                                {markdownContent}
                            </ReactMarkdown>
                        </div>
                    </article>

                    {/* 3. SIDEBAR (30%) */}
                    <aside className="lg:col-span-4 space-y-8">
                        {/* Technical Specs Panel - Simplified */}
                        <div className="bg-[#141b2d]/50 border border-slate-800 rounded-lg p-6 sticky top-32">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 pb-2 border-b border-slate-800">
                                Información
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Investigador</p>
                                    <p className="text-white font-medium">{data.investigator}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">ArXiv ID</p>
                                        <p className={`font-mono text-sm text-[#11ba82] ${robotoMono.className}`}>{data.arxiv}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Fecha</p>
                                        <p className="text-white text-sm">{data.date}</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Colaboradores</p>
                                    <p className="text-white text-sm">
                                        {data.coResearchers && data.coResearchers.length > 0
                                            ? data.coResearchers.join(', ')
                                            : 'Ninguno'}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Mentores</p>
                                    <p className="text-white text-sm">
                                        {data.mentors && data.mentors.length > 0
                                            ? data.mentors.join(', ')
                                            : 'No asignado'}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-3">Etiquetas</p>
                                    <div className="flex flex-wrap gap-2">
                                        {data.tags && data.tags.map((tag, index) => (
                                            <span key={index} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Progress Bar - Standard */}
                                {data.status === 'En Curso' && (
                                    <div className="pt-4">
                                        <div className="flex justify-between text-xs mb-2">
                                            <span className="text-slate-400 uppercase tracking-wider">Progreso</span>
                                            <span className="text-white font-mono">{data.progress}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-[#11ba82]"
                                                style={{ width: `${data.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
