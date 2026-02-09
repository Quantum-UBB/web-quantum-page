"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getMyInvestigations } from '@/services/investigationService';

export default function MisInvestigacionesPage() {
    const [myInvestigations, setMyInvestigations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = () => {
            const data = getMyInvestigations();
            setMyInvestigations(data);
            setIsLoading(false);
        };
        loadData();
    }, []);

    const handleTogglePublicar = (id) => {
        setMyInvestigations(prev => prev.map(inv =>
            inv.id === id ? { ...inv, publicada: !inv.publicada } : inv
        ));
    };

    if (isLoading) {
        return <div className="min-h-screen pt-56 bg-slate-900 text-white text-center">Cargando tus investigaciones...</div>;
    }

    return (
        <main className="min-h-screen pb-20 relative bg-[#0F172A]">
            {/* Background Overlay */}
            <div className="fixed inset-0 z-0 bg-[#0F172A]">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 font-[family-name:var(--font-orbitron)] tracking-tight">
                            MIS <span className="text-[#14E19D]">INVESTIGACIONES</span>
                        </h1>
                        <p className="text-slate-400">Gestiona y publica tus proyectos de investigación académica.</p>
                    </div>

                    <Link
                        href="/my-investigations/create"
                        className="bg-[#14E19D] hover:bg-emerald-400 text-slate-900 font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/20 active:scale-95 flex items-center justify-center gap-2 group"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                        SUBIR INVESTIGACIÓN
                    </Link>
                </div>

                {/* Investigations List / Table */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-slate-700 bg-slate-900/50">
                                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Título de la Investigación</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-center">Estado</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-center">Última Actualización</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700/50">
                                {myInvestigations.map((inv) => (
                                    <tr key={inv.id} className="hover:bg-slate-700/30 transition-colors group">
                                        <td className="px-6 py-5">
                                            <div className="flex flex-col">
                                                <Link href={`/investigations/${inv.id}`}>
                                                    <span className="text-white font-semibold text-lg group-hover:text-[#14E19D] transition-colors cursor-pointer">{inv.title}</span>
                                                </Link>
                                                <div className="flex gap-2 mt-1">
                                                    {inv.tags.map(tag => (
                                                        <span key={tag} className="text-[10px] text-slate-500">{tag}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-center">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${inv.status === 'En Curso'
                                                ? 'bg-[#BA1149]/10 text-[#BA1149] border border-[#BA1149]/20'
                                                : 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                                                }`}>
                                                {inv.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5 text-center text-slate-400 text-sm">
                                            {inv.lastUpdate}
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center justify-end gap-3">

                                                <button
                                                    onClick={() => handleTogglePublicar(inv.id)}
                                                    className={`px-4 py-2 rounded text-[10px] font-bold uppercase tracking-widest transition-all border ${inv.publicada
                                                        ? 'bg-[#BA1149] border-[#BA1149] text-white hover:bg-transparent hover:text-[#BA1149]'
                                                        : 'bg-transparent border-slate-600 text-slate-400 hover:border-white hover:text-white'
                                                        }`}
                                                >
                                                    {inv.publicada ? 'Ocultar' : 'Publicar'}
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {myInvestigations.length === 0 && (
                    <div className="text-center py-20 bg-slate-800/20 rounded-xl border border-dashed border-slate-700 mt-8">
                        <svg className="w-16 h-16 text-slate-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h3 className="text-xl font-bold text-white mb-2">No tienes investigaciones todavía</h3>
                        <p className="text-slate-500 mb-8">Comienza subiendo tu primer proyecto de investigación académica.</p>
                        <button className="text-[#14E19D] font-bold hover:underline">Subir mi primera investigación</button>
                    </div>
                )}
            </div>
        </main>
    );
}
