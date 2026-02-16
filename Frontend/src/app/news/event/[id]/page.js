"use client";
import React, { useEffect, useState } from 'react';
import { getEventById } from '@/services/dataService';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function EventDetailPage() {
    const params = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (params.id) {
            getEventById(params.id).then(data => {
                setEvent(data);
                setLoading(false);
            });
        }
    }, [params.id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-cyan-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!event) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center pt-20">
                <h1 className="text-2xl text-gray-800 font-bold mb-4">Evento no encontrado</h1>
                <Link href="/news" className="text-cyan-600 hover:underline">Volver a Noticias</Link>
            </div>
        );
    }

    const startDate = new Date(event.date);
    const endDate = event.endDate ? new Date(event.endDate) : null;
    
    // Formatos de fecha/hora
    const dateStr = startDate.toLocaleDateString('es-CL', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    const timeStart = startDate.toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' });
    const timeEnd = endDate ? endDate.toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' }) : '';

    // Check if event is in the future
    const isUpcoming = new Date(event.date) > new Date();

    const handleAuthRequired = () => {
        alert("Debes poseer una cuenta para realizar esta acción.");
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans text-gray-800 pb-20 pt-32 md:pt-48">
            
            {/* Top RSVP Bar (Blue Alert) - Only for Upcoming Events */}
            {isUpcoming && (
                <div className="bg-blue-50 border-b border-blue-100 sticky top-16 z-20">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-start gap-3">
                            <div className="bg-blue-500 text-white rounded-full p-1 mt-0.5">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div>
                                <p className="text-sm text-blue-900 font-medium">
                                    RSVP para este evento a realizarse el <span className="font-bold capitalize">{dateStr}</span> a las {timeStart}.
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex gap-2">
                            <button 
                                onClick={handleAuthRequired}
                                className="px-4 py-1.5 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
                            >
                                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Asistiré
                            </button>
                            <button 
                                onClick={handleAuthRequired}
                                className="px-4 py-1.5 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                Quizás
                            </button>
                            <button 
                                onClick={handleAuthRequired}
                                className="px-4 py-1.5 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                No asistiré
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content Container */}
            <main className="max-w-7xl mx-auto px-6 mt-8">
                
                {/* Back to News Link */}
                <Link href="/news" className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-bold mb-6 transition-colors group">
                    <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    Volver a Noticias
                </Link>

                {/* Hero Banner */}
                <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg mb-8">
                    <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-8">
                        <h1 className="text-3xl md:text-5xl font-bold text-white shadow-sm leading-tight max-w-4xl">
                            {event.title}
                        </h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* Left Column: Description & Host Info */}
                    <div className="lg:col-span-2 space-y-12">
                        
                        {/* Host Mini-Header (Mobile/Tablet layout style from screenshot) */}
                        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                            <div className="flex items-center gap-4">
                                <span className="uppercase tracking-wider text-sm font-bold text-cyan-700">Temas Quantum</span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="prose prose-lg max-w-none text-gray-600">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Sobre el Evento</h3>
                            <p>{event.fullDescription}</p>
                            <p className="mt-4">
                                Este evento explorará las fronteras de la tecnología con demostraciones en vivo, 
                                sesiones de preguntas y respuestas, y oportunidades únicas de networking con 
                                líderes de la industria. No te pierdas la oportunidad de ser parte de la comunidad.
                            </p>
                        </div>

                        {/* Host Section */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-start gap-6">
                            <img 
                                src={event.hostImage || "https://via.placeholder.com/100"} 
                                alt={event.host} 
                                className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-100"
                            />
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">Organizado por</h4>
                                <p className="text-cyan-700 font-medium mb-2">{event.host}</p>
                                <p className="text-sm text-gray-500">
                                    Líderes en innovación y difusión tecnológica. Comprometidos con el avance del conocimiento abierto.
                                </p>
                                <button className="mt-4 text-sm font-bold text-cyan-600 hover:text-cyan-800 uppercase tracking-wide">
                                    Ver Perfil del Organizador →
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Sidebar Info */}
                    <div className="space-y-8">
                        
                        {/* Event Details Card */}
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 sticky top-40">
                            
                            <div className="mb-6">
                                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Fecha y Hora</h3>
                                <p className="text-gray-900 font-medium capitalize">{dateStr}</p>
                                <p className="text-gray-600">{timeStart} - {timeEnd} (GMT-3)</p>
                                <p className="text-xs text-green-600 mt-1 font-medium bg-green-50 inline-block px-2 py-0.5 rounded">Evento en Vivo</p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Ubicación</h3>
                                <p className="text-gray-900 font-medium">{event.location}</p>
                                <a href={event.locationUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-cyan-600 hover:underline">
                                    Ver mapa / enlace
                                </a>
                            </div>

                            <button 
                                onClick={handleAuthRequired}
                                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-lg shadow-cyan-600/20 mb-3 flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                Añadir a Calendario
                            </button>
                            
                            <p className="text-xs text-gray-400 text-center">
                                Se enviará un recordatorio 15 min antes.
                            </p>
                        </div>

                    </div>
                </div>

            </main>
        </div>
    );
}
