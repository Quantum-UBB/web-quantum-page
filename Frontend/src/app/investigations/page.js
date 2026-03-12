"use client";

import { useState, useEffect } from 'react';
import { IndustrialPanelSerif } from '@/components/investigations/CardVariants';
import { getInvestigations, toggleInvestigationVisibility } from '@/services/investigationService';
import InvestigationFilters from '@/components/investigations/InvestigationFilters';

const AnimatedCounter = ({ value, duration = 1000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseInt(value) || 0;
        if (start === end) {
            setCount(end);
            return;
        };

        let totalMiliseconds = duration;
        let incrementTime = (totalMiliseconds / end);

        let timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [value, duration]);

    return <span>{count}</span>;
};

export default function InvestigacionesPage() {
    const [allInvestigations, setAllInvestigations] = useState([]);
    const [filteredInvestigations, setFilteredInvestigations] = useState([]);
    const [activeFilter, setActiveFilter] = useState('Todos');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await getInvestigations();
                setAllInvestigations(data || []);
                setFilteredInvestigations(data || []);
            } catch (err) {
                console.error("Error loading investigations:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, []);

    useEffect(() => {
        if (!allInvestigations || allInvestigations.length === 0) return;

        if (activeFilter === 'Todos' || activeFilter.trim() === '') {
            setFilteredInvestigations(allInvestigations);
        } else {
            const normalizeText = (text) =>
                text ? text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";

            const searchTerm = normalizeText(activeFilter);

            const filtered = allInvestigations.filter(inv => {
                const tagsMatch = inv.tags && inv.tags.some(tag => normalizeText(tag).includes(searchTerm));
                const titleMatch = inv.title && normalizeText(inv.title).includes(searchTerm);
                return tagsMatch || titleMatch;
            });
            setFilteredInvestigations(filtered);
        }
    }, [activeFilter, allInvestigations]);

    const handleTogglePublicar = async (id) => {
        try {
            // Find current status
            const currentItem = allInvestigations.find(inv => inv.id === id);
            if (!currentItem) return;
            const newStatus = !currentItem.publicada;

            await toggleInvestigationVisibility(id, newStatus);

            // Update local state only if API call was successful
            setAllInvestigations(prev => prev.map(inv =>
                inv.id === id ? { ...inv, publicada: newStatus } : inv
            ));
            setFilteredInvestigations(prev => prev.map(inv =>
                inv.id === id ? { ...inv, publicada: newStatus } : inv
            ));
        } catch (err) {
            console.error("Error toggling visibility:", err);
            alert("Hubo un error al cambiar la visibilidad de la investigación.");
        }
    };



    if (isLoading) {
        return <div className="min-h-screen pt-56 bg-slate-900 text-white text-center">Cargando investigaciones...</div>;
    }

    if (error) {
        return <div className="min-h-screen pt-56 bg-slate-900 text-red-500 text-center">Error: {error}</div>;
    }

    return (
        <>
            {/* Solid Background - Image removed as requested */}
            <div className="fixed inset-0 z-0 bg-[#0F172A]">
            </div>

            <main className="min-h-screen pb-20 relative z-10 -mt-[190px] md:-mt-[250px] pt-32 xl:pt-40 max-w-[1150px] mx-auto px-6 lg:px-12">
                {/* 1. HERO SECTION - Minimal & Professional */}
                <div className="mb-16 text-center">

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-[family-name:var(--font-orbitron)] tracking-tighter uppercase leading-[1.1]">
                        REPOSITORIO DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14E19D] to-emerald-400">INVESTIGACIONES</span>
                    </h1>

                    {/* Dynamic Stats Row */}
                    <div className="flex items-center justify-center gap-12 mb-16">
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-bold text-white mb-2 font-mono">
                                <AnimatedCounter value={allInvestigations.length} />
                            </span>
                            <span className="text-[10px] text-slate-300 uppercase tracking-[0.2em] font-bold">Estudios Totales</span>
                        </div>
                        <div className="w-px h-10 bg-slate-800"></div>
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-bold text-[#3B82F6] mb-2 font-mono">
                                <AnimatedCounter value={allInvestigations.filter(inv => inv.status === 'En Curso').length} />
                            </span>
                            <span className="text-[10px] text-slate-300 uppercase tracking-[0.2em] font-bold">En Curso</span>
                        </div>
                        <div className="w-px h-10 bg-slate-800"></div>
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-bold text-[#14E19D] mb-2 font-mono">
                                <AnimatedCounter value={allInvestigations.filter(inv => inv.status === 'Finalizado').length} />
                            </span>
                            <span className="text-[10px] text-slate-300 uppercase tracking-[0.2em] font-bold">Finalizados</span>
                        </div>
                    </div>

                    {/* 2. INTERACTION BAR - Centered Search & Quick Filters */}
                    <div className="max-w-4xl mx-auto mb-16">
                        <InvestigationFilters
                            activeFilter={activeFilter}
                            onFilterChange={setActiveFilter}
                        />
                    </div>
                </div>

                {/* 3. MAIN GRID with Dynamic Data - Intermediate width (3 columns on large screens) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredInvestigations.map((inv) => (
                        <div key={inv.id} className="h-full">
                            <IndustrialPanelSerif
                                {...inv}
                                onTogglePublicar={handleTogglePublicar}
                            />
                        </div>
                    ))}

                    {filteredInvestigations.length === 0 && (
                        <div className="col-span-full text-center text-slate-400 py-20">
                            No se encontraron investigaciones para este filtro.
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}
