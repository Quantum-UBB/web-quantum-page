"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAllEventsRaw, updateEventStatus, deleteEvent } from '@/services/dataService';

export default function MyEventsPage() {
    const [myEvents, setMyEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            const savedEvents = await getAllEventsRaw();
            setMyEvents(savedEvents);
            setIsLoading(false);
        };
        loadData();
    }, []);

    const handleTogglePublish = async (id) => {
        const itemToUpdate = myEvents.find(ev => ev.id === id);
        if (!itemToUpdate) return;
        
        const newStatus = itemToUpdate.status === 'draft' ? 'scheduled' : 'draft';
        
        try {
            await updateEventStatus(id, newStatus);
            setMyEvents(prev => prev.map(ev => 
                ev.id === id ? { ...ev, status: newStatus } : ev
            ));
        } catch (error) {
            console.error("Failed to update status", error);
        }
    };

    const handleDelete = async (id) => {
        if(confirm("¿Estás seguro de eliminar este evento?")) {
             try {
                 await deleteEvent(id);
                 setMyEvents(prev => prev.filter(ev => ev.id !== id));
             } catch (error) {
                 console.error("Failed to delete", error);
             }
        }
    }

    if (isLoading) {
        return <div className="min-h-screen pt-56 bg-[#1D272E] text-white text-center">Cargando tus eventos...</div>;
    }

    return (
        <main className="min-h-screen pb-20 relative bg-[#1D272E] -mt-[190px] md:-mt-[300px] z-10">
            {/* Background Overlay */}
            <div className="fixed inset-0 z-0 bg-[#1D272E]">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 md:pt-32">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                            MIS <span className="text-purple-400">EVENTOS</span>
                        </h1>
                        <p className="text-slate-400">Gestiona tus eventos guardados y publicados.</p>
                    </div>

                    <div className="flex gap-4">
                        <Link
                            href="/news"
                            className="bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold py-3 px-6 rounded-lg transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 group border border-gray-700 hover:border-gray-500"
                        >
                            Volver a Noticias
                        </Link>
                        <Link
                            href="/news/event/create"
                            className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg shadow-purple-500/20 active:scale-95 flex items-center justify-center gap-2 group"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                            </svg>
                            CREAR EVENTO
                        </Link>
                    </div>
                </div>

                {/* Events List / Table */}
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-gray-800 bg-gray-900">
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Título del Evento</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Estado</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Fecha Inicio</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800/50">
                                {myEvents.map((ev) => (
                                    <tr key={ev.id} className="hover:bg-gray-800/50 transition-colors group">
                                        <td className="px-6 py-5">
                                            <div className="flex flex-col">
                                                <span className="text-white font-semibold text-lg">{ev.title || 'Sin Título'}</span>
                                                <div className="flex gap-2 mt-1">
                                                    <span className="text-[10px] text-gray-500">{ev.type || 'General'} • {ev.host || 'Anónimo'}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-center">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${ev.status === 'draft'
                                                ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                                                : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                                                }`}>
                                                {ev.status === 'draft' ? 'Borrador' : 'Publicado'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5 text-center text-gray-400 text-sm">
                                            {ev.date ? new Date(ev.date).toLocaleDateString() : 'N/A'}
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center justify-end gap-3">
                                                 <button
                                                    onClick={() => handleDelete(ev.id)}
                                                    className="px-4 py-2 rounded text-[10px] font-bold uppercase tracking-widest transition-all border bg-transparent border-red-500/50 text-red-500 hover:bg-red-500 hover:text-white"
                                                >
                                                    Eliminar
                                                </button>
                                                <button
                                                    onClick={() => handleTogglePublish(ev.id)}
                                                    className={`px-4 py-2 rounded text-[10px] font-bold uppercase tracking-widest transition-all border ${ev.status !== 'draft'
                                                        ? 'bg-yellow-600 border-yellow-600 text-white hover:bg-transparent hover:text-yellow-500'
                                                        : 'bg-purple-600 border-purple-600 text-white hover:bg-transparent hover:text-purple-400'
                                                        }`}
                                                >
                                                    {ev.status !== 'draft' ? 'Pasar a Borrador' : 'Publicar'}
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {myEvents.length === 0 && (
                    <div className="text-center py-20 bg-gray-900/20 rounded-xl border border-dashed border-gray-800 mt-8">
                        <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <h3 className="text-xl font-bold text-white mb-2">No tienes eventos todavía</h3>
                        <p className="text-gray-500 mb-8">Comienza creando tu primer evento.</p>
                        <Link href="/news/event/create" className="text-purple-400 font-bold hover:underline">Crear un evento</Link>
                    </div>
                )}
            </div>
        </main>
    );
}
